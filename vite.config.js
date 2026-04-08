"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var path = require("path");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_vue_1.default)()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
