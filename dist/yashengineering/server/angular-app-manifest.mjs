
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IYGELCJU.js",
      "chunk-CJOZHYE4.js",
      "chunk-Z3GVHI37.js",
      "chunk-NCK4DQFO.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKVVAGIR.js",
      "chunk-CJOZHYE4.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JWHZA5TV.js",
      "chunk-Z3GVHI37.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OTKEG3NS.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/reactors"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NSMOYKDO.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/receiver-and-storage"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3UNSXMVY.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/mixer-and-blender"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KEDDJZ4P.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/heatexchangers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QEBAXSWJ.js"
    ],
    "route": "/products/chemical-products/condenser"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E5T7ILPB.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/chimney"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RTKYVEM.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/distillationcolumns"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CQLKOA5O.js",
      "chunk-4RW3PS3Z.js",
      "chunk-NCK4DQFO.js",
      "chunk-W3MJENCP.js"
    ],
    "route": "/products/chemical-products/reboilers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RLTZBGK4.js"
    ],
    "route": "/products/chemical-products/centrifuges"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11875, hash: '306dd83a409e4f4f7ece0fa1a6498c46c0ecd6796aa623b183e53e88dc226215', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11915, hash: '43115e53556cb7ff66ec9662738d66844c20927902094745e7d9ab54d4e1d77e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23010, hash: '3902a93a7b37a01587bd8c40bab9be13c70a468bb17cb3a5b12c92bf55afc96c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/chemical-products/mixer-and-blender/index.html': {size: 23010, hash: 'e201c573fca4417797c5ce22ebe1df6a2e6e635754f869cb70dc10a0e445d1da', text: () => import('./assets-chunks/products_chemical-products_mixer-and-blender_index_html.mjs').then(m => m.default)},
    'products/chemical-products/heatexchangers/index.html': {size: 23010, hash: '859516d98f6d8c7b4e1f6fc14988ee50240e4978e01fc9272abc1704ee7d53c0', text: () => import('./assets-chunks/products_chemical-products_heatexchangers_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 22958, hash: '5d89fc457113867dbaef41fbfe829d7eb08fd3f1a8bacb0f99f510e02e22ce93', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'products/chemical-products/reboilers/index.html': {size: 23010, hash: 'aa70c50b474b2a7b19358a3892d9c31acc495666e0c50c9fd69cdab9d21bfe8d', text: () => import('./assets-chunks/products_chemical-products_reboilers_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 22958, hash: '4918f29d5e2be363dad48c171cf2ba2689539d4d9121bd0988e91d06657969f6', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'products/chemical-products/receiver-and-storage/index.html': {size: 23010, hash: '62cb6c457f5d60d876870cf0111ac1fcba64f1552bd21195ad7b3e9994fd78cc', text: () => import('./assets-chunks/products_chemical-products_receiver-and-storage_index_html.mjs').then(m => m.default)},
    'products/chemical-products/chimney/index.html': {size: 23010, hash: '92d4b5e916e1566a4dc5ad8aeaf102e9cc7d3910cdfb358af4d0d3553f0d6b9f', text: () => import('./assets-chunks/products_chemical-products_chimney_index_html.mjs').then(m => m.default)},
    'products/chemical-products/distillationcolumns/index.html': {size: 23010, hash: 'a756ef382668c08d144d08593f62a03919fadc5af0e731dfe81ed9eede7b71c7', text: () => import('./assets-chunks/products_chemical-products_distillationcolumns_index_html.mjs').then(m => m.default)},
    'products/chemical-products/reactors/index.html': {size: 23010, hash: '8d4762d5192dbf42de7fe4d0ef9977d96005a3047ed3e3d55a3fc2bae709a6f4', text: () => import('./assets-chunks/products_chemical-products_reactors_index_html.mjs').then(m => m.default)},
    'products/chemical-products/centrifuges/index.html': {size: 22854, hash: 'd0326b9b6dcae746a8fcea522bcd9e4d70d8f5b09d1528abe27cefe6fde86354', text: () => import('./assets-chunks/products_chemical-products_centrifuges_index_html.mjs').then(m => m.default)},
    'products/chemical-products/condenser/index.html': {size: 22854, hash: '23a76f622743ebc823699455a3b26d605b6da313daccc1c2a84d8b64df43acd2', text: () => import('./assets-chunks/products_chemical-products_condenser_index_html.mjs').then(m => m.default)},
    'styles-FGQYBYJY.css': {size: 1500, hash: 'BLwEJ8u/q+A', text: () => import('./assets-chunks/styles-FGQYBYJY_css.mjs').then(m => m.default)}
  },
};
