
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-VPD45M77.js",
      "chunk-CAB33BOF.js",
      "chunk-DO5THYQ5.js",
      "chunk-R4W4CMOA.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VPD45M77.js",
      "chunk-CAB33BOF.js",
      "chunk-DO5THYQ5.js",
      "chunk-R4W4CMOA.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OJJWBVWU.js",
      "chunk-CAB33BOF.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ACOIJZUE.js",
      "chunk-DO5THYQ5.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNUA5QQ4.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/reactors"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P7DPUGU4.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/receiver-and-storage"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q5IYZV7W.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/mixer-and-blender"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UULFWN3E.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/heatexchangers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TA7WHRXN.js"
    ],
    "route": "/products/chemical-products/condenser"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QQEOATPZ.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/chimney"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2CQOLUAK.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/distillationcolumns"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IOYZFD4I.js",
      "chunk-BFTQBEUB.js",
      "chunk-R4W4CMOA.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/chemical-products/reboilers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OLMY6UUM.js"
    ],
    "route": "/products/chemical-products/centrifuges"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SA3JKRFP.js",
      "chunk-BFTQBEUB.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/mechanical-products/pipesandfittings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4SR7Y3ZF.js",
      "chunk-BFTQBEUB.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/cng-cascade/type1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MDXKL5GW.js",
      "chunk-BFTQBEUB.js",
      "chunk-HO353IC4.js"
    ],
    "route": "/products/cng-cascade/type4"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11875, hash: '485e091dbf686f218266e5ad0110005a55f0c43fc849b4a4199a14a49a7f2efa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11915, hash: '14a7ccd351db448269e3b81deae4ca766f149f08ea09c868cf1971d87fbd0bd4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/chemical-products/mixer-and-blender/index.html': {size: 23286, hash: '9dafeca1d6ae4718c086c4292d4dcd4cd8519e2053bada8b794cc3eb86636795', text: () => import('./assets-chunks/products_chemical-products_mixer-and-blender_index_html.mjs').then(m => m.default)},
    'products/chemical-products/chimney/index.html': {size: 23286, hash: '90c9d46d716599696eabeecfccdd1b8846b7e359cc4e2b566912a70a65a1f7c7', text: () => import('./assets-chunks/products_chemical-products_chimney_index_html.mjs').then(m => m.default)},
    'products/chemical-products/reboilers/index.html': {size: 23286, hash: '1d26d96854ebca81d9e48a37d9127f322072b76720359f2689d0aa596759a168', text: () => import('./assets-chunks/products_chemical-products_reboilers_index_html.mjs').then(m => m.default)},
    'products/mechanical-products/pipesandfittings/index.html': {size: 23234, hash: 'efb5bd4ed8166643759287990c85cf653cce80054d22fae52ce269967be17bba', text: () => import('./assets-chunks/products_mechanical-products_pipesandfittings_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 23234, hash: '331ab6a166e3e347e68546992855972221682e8e74d769ca3766f0fbdd3167e1', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'products/chemical-products/reactors/index.html': {size: 23286, hash: 'da07acd7a1d4582c4669165223b5e2985be12a2782d4d814b19ecf09c09b47a0', text: () => import('./assets-chunks/products_chemical-products_reactors_index_html.mjs').then(m => m.default)},
    'products/chemical-products/condenser/index.html': {size: 23130, hash: '1cd65a0a558d8d3c3423022a408749ffe7ad16a145c2f2e5de6e68a62b4f7dfa', text: () => import('./assets-chunks/products_chemical-products_condenser_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23286, hash: '6a319329b67b5158691bd8d865ecd96e38aa5edf5d97c309a35ac5938ab34356', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'products/chemical-products/centrifuges/index.html': {size: 23130, hash: '23213ac44b0f54f83d5bc0ee3dfd37003c1ad89e162e1ef1082742df55864f91', text: () => import('./assets-chunks/products_chemical-products_centrifuges_index_html.mjs').then(m => m.default)},
    'products/chemical-products/heatexchangers/index.html': {size: 23286, hash: '7f104723a8c7ceb399f993dbc33fe8596f64fd662e820c561b424690d853cae2', text: () => import('./assets-chunks/products_chemical-products_heatexchangers_index_html.mjs').then(m => m.default)},
    'products/cng-cascade/type4/index.html': {size: 23234, hash: 'b821878a29a55c22718efa527a072000a5856af269055a8850ad03ffe52cc805', text: () => import('./assets-chunks/products_cng-cascade_type4_index_html.mjs').then(m => m.default)},
    'products/cng-cascade/type1/index.html': {size: 23234, hash: '8acb3709a4b5f8a55b9cf83727f08453c88368e0ed8f09965c6d50022aa60fac', text: () => import('./assets-chunks/products_cng-cascade_type1_index_html.mjs').then(m => m.default)},
    'products/chemical-products/distillationcolumns/index.html': {size: 23286, hash: '70498a7df86f244d1cb4dcddee92b5637835f6710f87d27ee65086f114029284', text: () => import('./assets-chunks/products_chemical-products_distillationcolumns_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 23234, hash: '119631cac81c8a4f4f7b2df8b7cfd333fda6f4c6a781e10a51799890ab32fd21', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'products/chemical-products/receiver-and-storage/index.html': {size: 23286, hash: 'c0a8f19a90d39e50f5014d5b906232fefc30254253fe5702cf82dc9b07636f7f', text: () => import('./assets-chunks/products_chemical-products_receiver-and-storage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23286, hash: '6a319329b67b5158691bd8d865ecd96e38aa5edf5d97c309a35ac5938ab34356', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FGQYBYJY.css': {size: 1500, hash: 'BLwEJ8u/q+A', text: () => import('./assets-chunks/styles-FGQYBYJY_css.mjs').then(m => m.default)}
  },
};
