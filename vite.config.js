import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 이 설정을 사용할 수 있도록 api prefix를 추가한다.
      // 사용 코드에서 이 prefix를 붙여서 사용하면, rewrite 코드가 떼고 서버로 보낸다.
      '/be-api': {
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace('/be-api', '/api')
      }
    }
  }
})
