
import { apiConfig } from './apiConfig.js';

export const apiInfo = {
    list: `${apiConfig.host}:${apiConfig.port}/article/main/index`,
    detail: `${apiConfig.host}:${apiConfig.port}/article/main/detail`,
}