import hashlib
import time
import requests
from requests_toolbelt.multipart.encoder import MultipartEncoder
import asyncio

class MagicAI:
    def __init__(self, app_client, app_key, base_url):
        self.app_client = app_client
        self.app_key = app_key
        self.base_url = base_url

    def gen_auth_header(self, url):
        path = "/sora/" + url.replace(self.base_url, '')
        print(path)
        timestamp = str(int(time.time() * 1000))
        sign = hashlib.md5((timestamp + self.app_key + path).encode('utf-8')).hexdigest()
        return {
            'x-api-key': sign,
            'x-api-timestamp': timestamp,
            'x-api-client': self.app_client
        }

    async def generate_image(self, function_name, props_params, file_path):
        send_url = self.base_url + function_name
        post_data = {}
        content_type = 'application/json'
        if file_path is not None:
            post_data = MultipartEncoder(
                fields={'image': ('filename', open(file_path, 'rb'), 'image/jpeg'), **props_params}
            )
            content_type = post_data.content_type
        else:
            # 没有文件就不需要multipart, application/json即可
            import json
            post_data = json.dumps(props_params)
        headers = self.gen_auth_header(send_url)
        headers['Content-Type'] = content_type
        try:
            response = requests.post(send_url, data=post_data, headers=headers)
            print('Image processing request sent successfully', response)
            return response.json()
        except Exception as error:
            print(f'Failed to send image processing request: {error}')
            return None

    async def poll_for_result(self, prompt_id):
        get_result_url = self.base_url + "result/" + prompt_id
        print(get_result_url)
        try:
            response = requests.get(get_result_url)
            data = response.json()
            return data
        except Exception as error:
            print(f'Error polling for result: {error}')
            return None
