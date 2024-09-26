from flask import Flask, request, jsonify
from MagicAI import MagicAI
import asyncio
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

# 初始化 MagicAI 客户端
app_client = os.environ.get('APP_CLIENT')
app_key = os.environ.get('APP_KEY')
base_url = os.environ.get('BASE_URL')
magic_ai = MagicAI(app_client, app_key, base_url)

async def test_send(function_name, props_params, file_path=None):
    # 保持原有的 test_send 函数逻辑
    # ...

async def big_boom(file_path, size):
    # 保持原有的 big_boom 函数逻辑
    # ...

def generate_boobs_image(request):
    if request.method == 'POST':
        if 'image' not in request.files:
            return jsonify({'error': 'No image file'}), 400
        
        file = request.files['image']
        size = request.form.get('size', '2')
        
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        if file:
            filename = secure_filename(file.filename)
            file_path = f"/tmp/{filename}"
            file.save(file_path)
            
            try:
                loop = asyncio.new_event_loop()
                asyncio.set_event_loop(loop)
                img_url = loop.run_until_complete(big_boom(file_path, size))
                loop.close()
                
                if img_url:
                    return jsonify({'imgURL': img_url})
                else:
                    return jsonify({'error': 'Failed to generate image'}), 500
            except Exception as e:
                return jsonify({'error': str(e)}), 500
            finally:
                os.remove(file_path)
    
    return jsonify({'error': 'Invalid request method'}), 405