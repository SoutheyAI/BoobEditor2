import logging  # 导入日志模块
from flask import Flask, request, jsonify  # 从Flask库中导入Flask、request和jsonify
from MagicAI import MagicAI  # 导入MagicAI类
import asyncio  # 导入异步IO模块
import os  # 导入操作系统接口模块
from werkzeug.utils import secure_filename
from flask_cors import CORS  # 导入CORS模块
import traceback

# 设置日志级别
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)  # 创建Flask应用实例
CORS(app)  # 这将允许所有源的请求，您可以根据需要进行配置

# 设置上传文件夹
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# 初始化 MagicAI 客户端
app_client = "GYR"  # 设置MagicAI客户端ID
app_key = "NV7UBJMOJDC6"  # 设置MagicAI客户端密钥
base_url = "https://api.sora.moemiku.com/sora/"  # 设置MagicAI API的基础URL
magic_ai = MagicAI(app_client, app_key, base_url)  # 创建MagicAI实例

# 通用的发送请求函数
async def test_send(function_name, props_params, file_path=None):
    try:
        logger.debug(f"Sending request to MagicAI with function_name: {function_name}, props_params: {props_params}, file_path: {file_path}")
        response_data = await magic_ai.generate_image(function_name, props_params, file_path)
        logger.debug(f"Response from generate_image: {response_data}")
        if response_data and 'taskId' in response_data:
            task_id = response_data['taskId']
            logger.debug(f"Received taskId: {task_id}")
            attempts = 0
            max_attempts = 1200
            while attempts < max_attempts:
                result = await magic_ai.poll_for_result(task_id)
                logger.debug(f"Poll result (attempt {attempts + 1}): {result}")
                if result and 'imgURL' in result:
                    logger.debug(f"Received imgURL: {result['imgURL']}")
                    return result['imgURL']
                attempts += 1
                await asyncio.sleep(1)
            logger.error(f"Failed to get imgURL after {max_attempts} attempts")
        else:
            logger.error(f"Failed to get taskId from response: {response_data}")
        return None
    except Exception as e:
        logger.error(f"Error in test_send: {str(e)}")
        logger.error(traceback.format_exc())
        return None

# 生成丰胸图片的API
@app.route('/generate-boobs-image', methods=['POST'])
def generate_boobs_image():
    try:
        logger.debug("1. Entered generate_boobs_image function")
        logger.debug(f"Received request: files={request.files}, form={request.form}")
        
        if 'image' not in request.files:  # 这里改为 'image'
            logger.error("2. No image file in request")
            return jsonify({'error': 'No image file'}), 400
        
        file = request.files['image']  # 这里也改为 'image'
        size = request.form.get('size', '2')
        
        logger.debug(f"3. Received file: {file.filename}, size: {size}")
        
        if file.filename == '':
            logger.error("4. No selected file")
            return jsonify({'error': 'No selected file'}), 400
        
        if file:
            logger.debug("5. File is valid, proceeding")
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            
            logger.debug(f"6. File saved to {file_path}")
            
            try:
                logger.debug("7. Setting up asyncio loop")
                loop = asyncio.new_event_loop()
                asyncio.set_event_loop(loop)
                logger.debug("8. Calling big_boom function")
                img_url = loop.run_until_complete(big_boom(file_path, size))
                loop.close()
                logger.debug("9. Asyncio loop closed")
                
                if img_url:
                    logger.debug(f"10. Generated image URL: {img_url}")
                    return jsonify({'imgURL': img_url})
                else:
                    logger.error("11. Failed to generate image")
                    return jsonify({'error': 'Failed to generate image'}), 500
            except Exception as e:
                logger.error(f"12. Error in big_boom: {str(e)}")
                logger.error(traceback.format_exc())
                return jsonify({'error': str(e)}), 500
            finally:
                logger.debug(f"13. Removing file {file_path}")
                os.remove(file_path)
    except Exception as e:
        logger.error(f"14. Unexpected error: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500

async def big_boom(file_path, size):
    try:
        props_params = {"size": size}
        function_name = "bigboob"
        logger.debug(f"Calling test_send with function_name: {function_name}, props_params: {props_params}, file_path: {file_path}")
        result = await test_send(function_name, props_params, file_path)
        if result is None:
            logger.error("test_send returned None")
        return result
    except Exception as e:
        logger.error(f"Error in big_boom: {str(e)}")
        logger.error(traceback.format_exc())
        return None

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # 运行Flask应用