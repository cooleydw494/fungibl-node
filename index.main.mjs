// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0, ctc5],
      2: [ctc0, ctc1, ctc1, ctc3],
      3: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0],
      6: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Null;
  
  
  const v247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v248 = [v247, v247];
  const v252 = stdlib.protect(ctc0, interact.funToken, 'for Deployer\'s interact field funToken');
  const v253 = stdlib.protect(ctc0, interact.nftAssetId, 'for Deployer\'s interact field nftAssetId');
  const v254 = stdlib.protect(ctc1, interact.submitterAddress, 'for Deployer\'s interact field submitterAddress');
  
  const v257 = stdlib.tokenEq(v252, v253);
  const v258 = v257 ? false : true;
  stdlib.assert(v258, {
    at: './index.rsh:40:11:application',
    fs: ['at ./index.rsh:36:16:application call to [unknown function] (defined at: ./index.rsh:36:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v253, v252, v254],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v260, v261, v262], secs: v264, time: v263, didSend: v36, from: v259 } = txn1;
      
      const v265 = v248[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0')];
      const v266 = stdlib.Array_set(v265, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
      const v267 = stdlib.Array_set(v248, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'), v266);
      const v269 = v267[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1')];
      const v270 = stdlib.Array_set(v269, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
      const v271 = stdlib.Array_set(v267, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1'), v270);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v260
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v261
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v260, v261, v262], secs: v264, time: v263, didSend: v36, from: v259 } = txn1;
  const v265 = v248[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0')];
  const v266 = stdlib.Array_set(v265, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
  const v267 = stdlib.Array_set(v248, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'), v266);
  const v269 = v267[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1')];
  const v270 = stdlib.Array_set(v269, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
  const v271 = stdlib.Array_set(v267, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1'), v270);
  const v273 = stdlib.tokenEq(v261, v260);
  const v274 = v273 ? false : true;
  stdlib.assert(v274, {
    at: './index.rsh:46:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v283, time: v282, didSend: v53, from: v281 } = txn2;
  ;
  const v284 = v271[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
  const v285 = v284[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
  const v286 = stdlib.add(v285, stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '1'));
  const v288 = stdlib.Array_set(v284, '0', v286);
  const v289 = stdlib.Array_set(v271, stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0'), v288);
  ;
  const v290 = v289[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
  const v291 = v290[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
  const v292 = stdlib.eq(v291, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v292, {
    at: './index.rsh:56:10:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v293 = stdlib.addressEq(v281, v262);
  stdlib.assert(v293, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Deployer'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v302], secs: v304, time: v303, didSend: v87, from: v301 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v305 = stdlib.addressEq(v301, v259);
  stdlib.assert(v305, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Deployer'
    });
  await txn3.getOutput('Oracle_verifyNftSubmitted', 'v292', ctc3, v292);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v145, from: v328 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v332 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v336 = stdlib.addressEq(v328, v259);
  stdlib.assert(v336, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Deployer'
    });
  const v337 = null;
  await txn4.getOutput('Oracle_setPullDetails', 'v337', ctc6, v337);
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v351, time: v350, didSend: v168, from: v349 } = txn5;
  ;
  const v352 = stdlib.addressEq(v349, v332);
  stdlib.assert(v352, {
    at: './index.rsh:88:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Deployer'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v356, time: v355, didSend: v180, from: v354 } = txn6;
  ;
  ;
  const v363 = stdlib.addressEq(v349, v354);
  stdlib.assert(v363, {
    at: './index.rsh:92:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v366, time: v365, didSend: v187, from: v364 } = txn7;
  ;
  const v369 = stdlib.addressEq(v349, v364);
  stdlib.assert(v369, {
    at: './index.rsh:94:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function _Oracle_setPullDetails3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_setPullDetails3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_setPullDetails3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v259, v260, v261] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1]);
  const v313 = ctc.selfAddress();
  const v315 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:73:3:application',
    fs: ['at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:73:3:function exp)'],
    msg: 'in',
    who: 'Oracle_setPullDetails'
    });
  const v326 = stdlib.addressEq(v313, v259);
  stdlib.assert(v326, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:76:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:74:99:function exp)', 'at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:73:3:function exp)'],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_setPullDetails'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v259, v260, v261, v315],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v329], secs: v331, time: v330, didSend: v145, from: v328 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Oracle_setPullDetails"
        });
      ;
      const v332 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
      const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
      const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
      const v337 = null;
      const v338 = await txn1.getOutput('Oracle_setPullDetails', 'v337', ctc4, v337);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v145, from: v328 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v332 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v336 = stdlib.addressEq(v328, v259);
  stdlib.assert(v336, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_setPullDetails'
    });
  const v337 = null;
  const v338 = await txn1.getOutput('Oracle_setPullDetails', 'v337', ctc4, v337);
  stdlib.protect(ctc4, await interact.out(v329, v338), {
    at: './index.rsh:73:3:application',
    fs: ['at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:73:3:function exp)', 'at ./index.rsh:81:16:application call to "returnNothing" (defined at: ./index.rsh:73:3:function exp)'],
    msg: 'out',
    who: 'Oracle_setPullDetails'
    });
  
  return;
  
  
  
  };
export async function _Oracle_verifyNftSubmitted2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_verifyNftSubmitted2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_verifyNftSubmitted2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v259, v260, v261, v292] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc1, ctc1, ctc2]);
  const v295 = ctc.selfAddress();
  const v297 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:62:3:application',
    fs: ['at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:3:function exp)'],
    msg: 'in',
    who: 'Oracle_verifyNftSubmitted'
    });
  const v299 = stdlib.addressEq(v295, v259);
  stdlib.assert(v299, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:80:function exp)', 'at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:3:function exp)'],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_verifyNftSubmitted'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v259, v260, v261, v292, v297],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v302], secs: v304, time: v303, didSend: v87, from: v301 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Oracle_verifyNftSubmitted"
        });
      ;
      const v309 = await txn1.getOutput('Oracle_verifyNftSubmitted', 'v292', ctc2, v292);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v302], secs: v304, time: v303, didSend: v87, from: v301 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v305 = stdlib.addressEq(v301, v259);
  stdlib.assert(v305, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_verifyNftSubmitted'
    });
  const v309 = await txn1.getOutput('Oracle_verifyNftSubmitted', 'v292', ctc2, v292);
  stdlib.protect(ctc4, await interact.out(v302, v309), {
    at: './index.rsh:62:3:application',
    fs: ['at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:3:function exp)', 'at ./index.rsh:67:23:application call to "returnIsNftSubmitted" (defined at: ./index.rsh:62:3:function exp)'],
    msg: 'out',
    who: 'Oracle_verifyNftSubmitted'
    });
  
  return;
  
  
  
  };
export async function Puller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Puller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Puller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Null;
  
  
  const v247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v248 = [v247, v247];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v260, v261, v262], secs: v264, time: v263, didSend: v36, from: v259 } = txn1;
  const v265 = v248[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0')];
  const v266 = stdlib.Array_set(v265, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
  const v267 = stdlib.Array_set(v248, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'), v266);
  const v269 = v267[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1')];
  const v270 = stdlib.Array_set(v269, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
  const v271 = stdlib.Array_set(v267, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1'), v270);
  const v273 = stdlib.tokenEq(v261, v260);
  const v274 = v273 ? false : true;
  stdlib.assert(v274, {
    at: './index.rsh:46:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Puller'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v283, time: v282, didSend: v53, from: v281 } = txn2;
  ;
  const v284 = v271[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
  const v285 = v284[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
  const v286 = stdlib.add(v285, stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '1'));
  const v288 = stdlib.Array_set(v284, '0', v286);
  const v289 = stdlib.Array_set(v271, stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0'), v288);
  ;
  const v290 = v289[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
  const v291 = v290[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
  const v292 = stdlib.eq(v291, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v292, {
    at: './index.rsh:56:10:application',
    fs: [],
    msg: null,
    who: 'Puller'
    });
  const v293 = stdlib.addressEq(v281, v262);
  stdlib.assert(v293, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Puller'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v302], secs: v304, time: v303, didSend: v87, from: v301 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v305 = stdlib.addressEq(v301, v259);
  stdlib.assert(v305, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Puller'
    });
  await txn3.getOutput('Oracle_verifyNftSubmitted', 'v292', ctc3, v292);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v145, from: v328 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v332 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v336 = stdlib.addressEq(v328, v259);
  stdlib.assert(v336, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Puller'
    });
  const v337 = null;
  await txn4.getOutput('Oracle_setPullDetails', 'v337', ctc6, v337);
  const v346 = ctc.selfAddress();
  const v348 = stdlib.addressEq(v346, v332);
  stdlib.assert(v348, {
    at: './index.rsh:85:11:application',
    fs: ['at ./index.rsh:84:14:application call to [unknown function] (defined at: ./index.rsh:84:18:function exp)'],
    msg: null,
    who: 'Puller'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v259, v260, v261, v332, v333, v335],
    evt_cnt: 0,
    funcNum: 4,
    lct: v330,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v351, time: v350, didSend: v168, from: v349 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v351, time: v350, didSend: v168, from: v349 } = txn5;
  ;
  const v352 = stdlib.addressEq(v349, v332);
  stdlib.assert(v352, {
    at: './index.rsh:88:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Puller'
    });
  stdlib.protect(ctc6, await interact.sendingTokenToContract(), {
    at: './index.rsh:91:41:application',
    fs: ['at ./index.rsh:91:41:application call to [unknown function] (defined at: ./index.rsh:91:41:function exp)', 'at ./index.rsh:91:41:application call to "liftedInteract" (defined at: ./index.rsh:91:41:application)'],
    msg: 'sendingTokenToContract',
    who: 'Puller'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v259, v260, v261, v333, v335, v349],
    evt_cnt: 0,
    funcNum: 5,
    lct: v350,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:10:dot', stdlib.UInt_max, '0'), [[v333, v261]]],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v356, time: v355, didSend: v180, from: v354 } = txn6;
      
      ;
      sim_r.txns.push({
        amt: v333,
        kind: 'to',
        tok: v261
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc4, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v356, time: v355, didSend: v180, from: v354 } = txn6;
  ;
  ;
  const v363 = stdlib.addressEq(v349, v354);
  stdlib.assert(v363, {
    at: './index.rsh:92:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  const txn7 = await (ctc.sendrecv({
    args: [v259, v260, v261, v333, v335, v349],
    evt_cnt: 0,
    funcNum: 6,
    lct: v355,
    onlyIf: true,
    out_tys: [],
    pay: [v335, []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v366, time: v365, didSend: v187, from: v364 } = txn7;
      
      sim_r.txns.push({
        amt: v335,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v259,
        tok: v261
        });
      sim_r.txns.push({
        kind: 'from',
        to: v259,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v349,
        tok: v260
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v261
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v260
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc4, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v366, time: v365, didSend: v187, from: v364 } = txn7;
  ;
  const v369 = stdlib.addressEq(v349, v364);
  stdlib.assert(v369, {
    at: './index.rsh:94:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  ;
  ;
  stdlib.protect(ctc6, await interact.transferringNftToPuller(), {
    at: './index.rsh:99:42:application',
    fs: ['at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:99:42:application call to "liftedInteract" (defined at: ./index.rsh:99:42:application)'],
    msg: 'transferringNftToPuller',
    who: 'Puller'
    });
  
  ;
  stdlib.protect(ctc6, await interact.pullSuccess(v260), {
    at: './index.rsh:103:30:application',
    fs: ['at ./index.rsh:103:30:application call to [unknown function] (defined at: ./index.rsh:103:30:function exp)', 'at ./index.rsh:103:30:application call to "liftedInteract" (defined at: ./index.rsh:103:30:application)'],
    msg: 'pullSuccess',
    who: 'Puller'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Submitter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Submitter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Submitter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5, ctc5, ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v248 = [v247, v247];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v260, v261, v262], secs: v264, time: v263, didSend: v36, from: v259 } = txn1;
  const v265 = v248[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0')];
  const v266 = stdlib.Array_set(v265, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
  const v267 = stdlib.Array_set(v248, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'), v266);
  const v269 = v267[stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1')];
  const v270 = stdlib.Array_set(v269, '0', stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '0'));
  const v271 = stdlib.Array_set(v267, stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, '1'), v270);
  const v273 = stdlib.tokenEq(v261, v260);
  const v274 = v273 ? false : true;
  stdlib.assert(v274, {
    at: './index.rsh:46:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Submitter'
    });
  ;
  ;
  ;
  const v277 = ctc.selfAddress();
  const v279 = stdlib.addressEq(v277, v262);
  stdlib.assert(v279, {
    at: './index.rsh:52:11:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: null,
    who: 'Submitter'
    });
  
  stdlib.protect(ctc2, await interact.signingTransfer(), {
    at: './index.rsh:54:37:application',
    fs: ['at ./index.rsh:54:37:application call to [unknown function] (defined at: ./index.rsh:54:37:function exp)', 'at ./index.rsh:54:37:application call to "liftedInteract" (defined at: ./index.rsh:54:37:application)'],
    msg: 'signingTransfer',
    who: 'Submitter'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v259, v260, v261, v262, v271],
    evt_cnt: 0,
    funcNum: 1,
    lct: v263,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '1'), v260]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v283, time: v282, didSend: v53, from: v281 } = txn2;
      
      ;
      const v284 = v271[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
      const v285 = v284[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
      const v286 = stdlib.add(v285, stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '1'));
      const v288 = stdlib.Array_set(v284, '0', v286);
      const v289 = stdlib.Array_set(v271, stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0'), v288);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v260
        });
      const v290 = v289[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
      const v291 = v290[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
      const v292 = stdlib.eq(v291, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v283, time: v282, didSend: v53, from: v281 } = txn2;
  ;
  const v284 = v271[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
  const v285 = v284[stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0')];
  const v286 = stdlib.add(v285, stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '1'));
  const v288 = stdlib.Array_set(v284, '0', v286);
  const v289 = stdlib.Array_set(v271, stdlib.checkedBigNumberify('./index.rsh:55:13:dot', stdlib.UInt_max, '0'), v288);
  ;
  const v290 = v289[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
  const v291 = v290[stdlib.checkedBigNumberify('./index.rsh:56:18:application', stdlib.UInt_max, '0')];
  const v292 = stdlib.eq(v291, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v292, {
    at: './index.rsh:56:10:application',
    fs: [],
    msg: null,
    who: 'Submitter'
    });
  const v293 = stdlib.addressEq(v281, v262);
  stdlib.assert(v293, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Submitter'
    });
  stdlib.protect(ctc2, await interact.submitSuccess(v260), {
    at: './index.rsh:59:35:application',
    fs: ['at ./index.rsh:59:35:application call to [unknown function] (defined at: ./index.rsh:59:35:function exp)', 'at ./index.rsh:59:35:application call to "liftedInteract" (defined at: ./index.rsh:59:35:application)'],
    msg: 'submitSuccess',
    who: 'Submitter'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v302], secs: v304, time: v303, didSend: v87, from: v301 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v305 = stdlib.addressEq(v301, v259);
  stdlib.assert(v305, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Submitter'
    });
  await txn3.getOutput('Oracle_verifyNftSubmitted', 'v292', ctc4, v292);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v145, from: v328 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v332 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v336 = stdlib.addressEq(v328, v259);
  stdlib.assert(v336, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Submitter'
    });
  const v337 = null;
  await txn4.getOutput('Oracle_setPullDetails', 'v337', ctc2, v337);
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v351, time: v350, didSend: v168, from: v349 } = txn5;
  ;
  const v352 = stdlib.addressEq(v349, v332);
  stdlib.assert(v352, {
    at: './index.rsh:88:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Submitter'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v356, time: v355, didSend: v180, from: v354 } = txn6;
  ;
  ;
  const v363 = stdlib.addressEq(v349, v354);
  stdlib.assert(v363, {
    at: './index.rsh:92:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v366, time: v365, didSend: v187, from: v364 } = txn7;
  ;
  const v369 = stdlib.addressEq(v349, v364);
  stdlib.assert(v369, {
    at: './index.rsh:94:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Oracle_setPullDetails(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_setPullDetails expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_setPullDetails expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Oracle_setPullDetails3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Oracle_verifyNftSubmitted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_verifyNftSubmitted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_verifyNftSubmitted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Oracle_verifyNftSubmitted2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Oracle_setPullDetails(address,uint64,uint64,uint64)byte[0]`, `Oracle_verifyNftSubmitted()byte`],
    pure: [],
    sigs: [`Oracle_setPullDetails(address,uint64,uint64,uint64)byte[0]`, `Oracle_verifyNftSubmitted()byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAOAAEEICgIBQYCAzCgjQaq/NSHBjgmAgEAACI1ADEYQQSGKWRJIls1ASEFWzUCNhoAF0lBAC4iNQQjNQZJIQwMQAAWIQwSRDYaATYaAlA2GgNQNhoEUEIBwoHJw5AuEkQpQgJJNhoCFzUENhoDNhoBF0khCQxAAidJIQYMQAEsSSEHDEAAsiEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf0hDVs1/FdAIDX7gARhtKwMsDT8iAP/NPsxABJEsSKyATQDIQpbshIkshA0/7IUNP2yEbOxIrIBNPyyCCOyEDT/sgezsSKyASOyEiSyEDT7shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAyBIIQY0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEEWzX9IQpbNfwhDVs1+1dAIDX6gATMmZJcsDT8NP2IA2E0+jEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lAoSwFXAGBnSCEHNQEyBjUCQgLJSSQMQABpSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/iEEWzX9gVBbNfyBWFs1+4AEkSc087AxADQDVzAgEkQ0/zT+FlA0/RZQNPwWUDT7FlAxAFAoSwFXAGBnSCEGNQEyBjUCQgJaSCEJNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEEWzX9STUFNfyABEevRmU0/FCwNPxXACA1+zT8JVs1+jT8IQpbNfkxADT/EkSACAAAAAAAAAFRsCk1BzT/NP4WUDT9FlA0+1A0+hZQNPkWUChLAVcAYGdIJDUBMgY1AkIB1UkjDEAA+kkhCAxAAHFIIQg0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+IQRbNf1JNQU1/IAEJTy31zT8ULAxADT/EkSACAAAAAAAAAEkNANXMAFQsDQDVzABNQc0/zT+FlA0/RZQKEsBVwAwZ0ghCTUBMgY1AkIBV0gjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEEWzX9V1AiNfyABJqLkXSwNPxXABE1+yM0/ogBgjT8NPtJIlsjCBZcAFwAVwARIlsjEkk1+kQxADQDVzAgEkQ0/zT+FlA0/RZQgAEBUChLAVcAMWdIIQg1ATIGNQJCANVIIQuIASEiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQVbNf5XECA1/YAEUD4OqzT/FlA0/hZQNP1QsIERr0k1/ElQSTX7SVcAESEFr1wAXABJNfpJVxERIQWvXABcETX5NP40/xNEIQuIALuxIrIBIrISJLIQMgqyFDT/shGzIQuIAKOxIrIBIrISJLIQMgqyFDT+shGzMQA0/xZQNP4WUDT9UDT5UChLAVcAcmdIIzUBMgY1AkIAHDEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 114,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T4","name":"v535","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v292","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v337","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v524","type":"address"},{"internalType":"uint256","name":"v525","type":"uint256"},{"internalType":"uint256","name":"v526","type":"uint256"},{"internalType":"uint256","name":"v527","type":"uint256"}],"name":"Oracle_setPullDetails","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Oracle_verifyNftSubmitted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v537","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v539","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v541","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v543","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v545","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v547","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f19620022c538819003601f810192909216830192916001600160401b039183851083861117620005a8578160809285926040978852833981010312620005a3578251916200005183620005be565b8051835260209262000065848301620005f6565b908481019182526200008d60606200007f888601620005f6565b9488840195865201620005f6565b906060810191825243600355620000a36200060b565b50865192620000b284620005be565b620000bc6200060b565b8452868401620000cb6200062c565b815288850190620000db6200062c565b82526060860193620000ec6200062c565b855260ff600454166200058b578a5133815281518b82015284516001600160a01b03908116828e015289518116606083015287518116608083015294939291907f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b66539060a090a15180159081156200057e575b5015620005665760009687815152878b82510152878c825101528051825152518a82510152518051918b8b84015193015115158c51936200019f85620005da565b8985528c8501528c840152620001b46200062c565b928392895b600281106200050e575050825252888101518a8a82015191015115158b5191620001e383620005da565b8883528b8301528b820152620001f86200062c565b91875b60028110620004c0575050898201528352818651168282511614600014620004b857845b15620004a05734620004885788519260a084018481108982111762000474578a528584528289850195878752818c870199898b528160608901968b885260808a01996200026b6200062c565b8b5233905251168952511689525116825251835281600196878755438855818b5196338c89015251168b87015251166060850152511660808301525160a08201848785925b600284106200044a575050505050610140815261016081018181108582111762000436578652805193841162000422576002548381811c9116801562000417575b868210146200040357601f8111620003b7575b508491601f85116001146200034e57939450849291908362000342575b50501b916000199060031b1c1916176002555b51611c2990816200069c8239f35b01519250388062000321565b6002815285812093958591601f198316915b888383106200039c575050501062000382575b505050811b0160025562000334565b015160001960f88460031b161c1916905538808062000373565b85870151885590960195948501948793509081019062000360565b60028352858320601f860160051c810191878710620003f8575b601f0160051c019084905b828110620003ec57505062000304565b848155018490620003dc565b9091508190620003d1565b634e487b7160e01b83526022600452602483fd5b90607f1690620002f1565b634e487b7160e01b82526041600452602482fd5b634e487b7160e01b83526041600452602483fd5b6060908b8651805183528481015185840152015115158c82015201930191019091878691620002b0565b634e487b7160e01b87526041600452602487fd5b885163100960cb60e01b8152600a6004820152602490fd5b885163100960cb60e01b815260096004820152602490fd5b60016200021f565b620004cc818362000673565b51620004d9828662000673565b52620004e6818562000673565b506000198114620004fa57600101620001fb565b634e487b7160e01b89526011600452602489fd5b90919293506200051f818362000673565b516200052c828762000673565b5262000539818662000673565b50600019811462000552576001019084939291620001b9565b634e487b7160e01b8a52601160045260248afd5b8a5163100960cb60e01b815260086004820152602490fd5b905060015414386200015e565b8a5163100960cb60e01b815260076004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b03821117620005a857604052565b606081019081106001600160401b03821117620005a857604052565b51906001600160a01b0382168203620005a357565b604051906200061a82620005da565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620005a85781528260005b8281106200065b57505050565b602090620006686200060b565b81840152016200064e565b906002811015620006855760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100f45780632e928421146100eb57806330dd5d08146100e2578063450bacff146100d95780635109f9ae146100d0578063573b8510146100c75780635e533377146100be57806383230757146100b5578063ab53f2c6146100ac578063d3c64a7a146100a35763f47590d30361000e5761009e610989565b61000e565b5061009e610827565b5061009e6107b5565b5061009e610796565b5061009e610723565b5061009e61053d565b5061009e6104e0565b5061009e610496565b5061009e6102be565b5061009e610129565b5034610113576000366003190112610113576020600354604051908152f35b600080fd5b602090600319011261011357600490565b5061014661013636610118565b61013e610c37565b503690611698565b61016161015c61015860045460ff1690565b1590565b610ffc565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd604051806101918433836116d4565b0390a16102786000916101a7600684541461101c565b6101d66101c46101b5610b7f565b60208082518301019101611a68565b915180159081156102b2575b5061103c565b608081016101e68151341461105c565b61027161026a602060a08501948780808060018060a01b03986102168b8b61020f33925161096c565b161461107c565b61023f610226604088015161096c565b610230885161096c565b908c60608a0151921690611bbe565b61025161024c875161096c565b61096c565b9051908282156102a9575bf11561029c575b015161096c565b925161096c565b1690611b61565b80556102846000600155565b61028c611ae9565b60405160008152602090f35b0390f35b6102a4611adc565b610263565b506108fc61025c565b905060015414386101d0565b5061028c6104776104856102d461013636610118565b6102eb6102e661015860045460ff1690565b61109c565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c12496040518061031b8433836116d4565b0390a161032c6005600054146110bc565b61034c61033a6101b5610b7f565b9151801590811561048a575b506110dc565b61035634156110fc565b61040e6104056040830192608061036d855161096c565b91610387610382606083019485519033611864565b61111a565b60a08101926103a83360018060a01b036103a1875161096c565b161461113a565b6103f26103e96103b6611466565b986103ca6103c4865161096c565b8b610c7b565b6103e36103da602087015161096c565b60208c01610c7b565b5161096c565b60408901610c7b565b516060870152015160808501525161096c565b60a08301610c7b565b6104186006600055565b61042143600155565b6040519283916020830191909160a060c082019381600180821b03918281511685528260208201511660208601528260408201511660408601526060810151606086015260808101516080860152015116910152565b03601f198101835282610b5c565b610d63565b90506001541438610346565b506040366003190112610113576104d56104ae610c37565b6040516104ba81610aad565b60043581526024356104cb81610c9d565b6020820152610e46565b602060405160008152f35b5060008060031936011261053a57604060209161052e6104fe610c37565b809284519061050c82610ad5565b80825285519161051b83610aad565b8783019180835283525115159052610e46565b01511515604051908152f35b80fd5b5061054a61013636610118565b61070d610555610c8a565b61056c61056761015860045460ff1690565b61115a565b6104856040937fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968551806105a18433836116d4565b0390a16105b260016000541461117a565b6106b16106a9866105c1610b7f565b936105eb6105d96020968780825183010191016116ee565b91518015908115610717575b5061119a565b6105f534156111ba565b61066b6106668683019861061a61061561060f8c5161096c565b336117f5565b6111da565b610660600161065960808701518051906106548d85845101938c82820151910151151591610646610c2a565b95865285015215158b840152565b611969565b5151148252565b51151590565b6111fa565b61068561067e61024c606084015161096c565b331461121a565b6102636106a1610693610c56565b986103e36103c4855161096c565b868901610c7b565b868501610c7b565b600160608401526106c26002600055565b6106cb43600155565b61047785519384928301919091606080608083019460018060a01b03808251168552806020830151166020860152604082015116604085015201511515910152565b5160008152602090f35b905060015414386105e5565b5060a036600319011261011357610738610c37565b6040519061074582610aad565b600435825260803660231901126101135761028c9160405161076681610af0565b60243561077281610978565b81526044356020820152606435604082015260843560608201526020820152611498565b5034610113576000366003190112610113576020600154604051908152f35b50346101135760008060031936011261053a5780546107d2610b7f565b906040519283918252602090604082840152835191826040850152815b83811061081057505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016107ef565b5061028c61047761048561083d61013636610118565b61085461084f61015860045460ff1690565b61123a565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d4604051806108848433836116d4565b0390a161089560046000541461125a565b6108c46108b26108a3610b7f565b602080825183010191016119f4565b91518015908115610960575b5061127a565b6108ce341561129a565b6108e86108e161024c606084015161096c565b33146112ba565b60a06108f2611466565b91610906610900825161096c565b84610c7b565b61091f610916602083015161096c565b60208501610c7b565b61093861092f604083015161096c565b60408501610c7b565b60808101516060840152015160808201526109563360a08301610c7b565b6104186005600055565b905060015414386108be565b6001600160a01b031690565b6001600160a01b0381160361011357565b50608036600319011261011357610298610a4a60206004356109aa81610978565b610a436109b5610c37565b80926109bf610c56565b60018060a01b03809216815285810160243581526040820190604435825260608301926064358452604051946109f486610ad5565b6109fc610c56565b9182875251169052518784510152516040835101525160608251015260405190610a2582610aad565b6000825285820190610a35610c56565b825260008352519052611498565b0151151590565b60405190151581529081906020820190565b90600182811c92168015610a8c575b6020831014610a7657565b634e487b7160e01b600052602260045260246000fd5b91607f1691610a6b565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610ac857604052565b610ad0610a96565b604052565b602081019081106001600160401b03821117610ac857604052565b608081019081106001600160401b03821117610ac857604052565b606081019081106001600160401b03821117610ac857604052565b60c081019081106001600160401b03821117610ac857604052565b60a081019081106001600160401b03821117610ac857604052565b601f909101601f19168101906001600160401b03821190821017610ac857604052565b6040519060008260025491610b9383610a5c565b808352600193808516908115610c095750600114610bbb575b50610bb992500383610b5c565b565b60026000908152600080516020611bfd83398151915294602093509091905b818310610bf1575050610bb9935082010138610bac565b85548884018501529485019487945091830191610bda565b9050610bb994506020925060ff191682840152151560051b82010138610bac565b60405190610bb982610b0b565b60405190610c4482610b0b565b60006040838281528260208201520152565b60405190610c6382610af0565b60006060838281528260208201528260408201520152565b6001600160a01b039091169052565b60405190610c9782610ad5565b60008252565b8015150361011357565b9081608091031261011357606060405191610cc183610af0565b8051610ccc81610978565b83526020810151610cdc81610978565b60208401526040810151610cef81610978565b60408401520151610cff81610c9d565b606082015290565b818110610d12575050565b60008155600101610d07565b90601f8211610d2b575050565b610bb99160026000526020600020906020601f840160051c83019310610d59575b601f0160051c0190610d07565b9091508190610d4c565b80519091906001600160401b038111610e39575b610d8b81610d86600254610a5c565b610d1e565b602080601f8311600114610dc75750819293600092610dbc575b50508160011b916000199060031b1c191617600255565b015190503880610da5565b6002600052601f19831694909190600080516020611bfd833981519152926000905b878210610e21575050836001959610610e08575b505050811b01600255565b015160001960f88460031b161c19169055388080610dfd565b80600185968294968601518155019501930190610de9565b610e41610a96565b610d77565b61048561047791610bb993610e68610e6361015860045460ff1690565b6112da565b6040805133815283516020808301919091528401511515818301529091610f64917f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95090606090a1610ebd6002600054146112fa565b610eec610eda610ecb610b7f565b60208082518301019101610ca7565b94518015908115610ff0575b5061131a565b610ef6341561133a565b610f0d610f0661024c865161096c565b331461135a565b82610f5d606086017fd95f394215c153035fad2a711fe5169a1e4a6bfadd2348ed1e1de08309d65b58610f54610f438351151590565b855190151581529081906020820190565b0390a151151590565b1515910152565b610fa8610fa082610f73610c37565b94610f87610f81825161096c565b87610c7b565b610263610f97602083015161096c565b60208801610c7b565b828401610c7b565b610fb26003600055565b610fbb43600155565b5192839160208301919091604060608201938160018060a01b0391828151168552826020820151166020860152015116910152565b90506001541438610ee6565b1561100357565b60405163100960cb60e01b815260276004820152602490fd5b1561102357565b60405163100960cb60e01b815260286004820152602490fd5b1561104357565b60405163100960cb60e01b815260296004820152602490fd5b1561106357565b60405163100960cb60e01b8152602a6004820152602490fd5b1561108357565b60405163100960cb60e01b8152602b6004820152602490fd5b156110a357565b60405163100960cb60e01b815260216004820152602490fd5b156110c357565b60405163100960cb60e01b815260226004820152602490fd5b156110e357565b60405163100960cb60e01b815260236004820152602490fd5b1561110357565b602460405163100960cb60e01b8152816004820152fd5b1561112157565b60405163100960cb60e01b815260256004820152602490fd5b1561114157565b60405163100960cb60e01b815260266004820152602490fd5b1561116157565b60405163100960cb60e01b8152600b6004820152602490fd5b1561118157565b60405163100960cb60e01b8152600c6004820152602490fd5b156111a157565b60405163100960cb60e01b8152600d6004820152602490fd5b156111c157565b60405163100960cb60e01b8152600e6004820152602490fd5b156111e157565b60405163100960cb60e01b8152600f6004820152602490fd5b1561120157565b60405163100960cb60e01b815260106004820152602490fd5b1561122157565b60405163100960cb60e01b815260116004820152602490fd5b1561124157565b60405163100960cb60e01b8152601c6004820152602490fd5b1561126157565b60405163100960cb60e01b8152601d6004820152602490fd5b1561128157565b60405163100960cb60e01b8152601e6004820152602490fd5b156112a157565b60405163100960cb60e01b8152601f6004820152602490fd5b156112c157565b60405163100960cb60e01b815260206004820152602490fd5b156112e157565b60405163100960cb60e01b815260126004820152602490fd5b1561130157565b60405163100960cb60e01b815260136004820152602490fd5b1561132157565b60405163100960cb60e01b815260146004820152602490fd5b1561134157565b60405163100960cb60e01b815260156004820152602490fd5b1561136157565b60405163100960cb60e01b815260166004820152602490fd5b1561138157565b60405163100960cb60e01b815260176004820152602490fd5b156113a157565b60405163100960cb60e01b815260186004820152602490fd5b156113c157565b60405163100960cb60e01b815260196004820152602490fd5b156113e157565b60405163100960cb60e01b8152601a6004820152602490fd5b1561140157565b60405163100960cb60e01b8152601b6004820152602490fd5b9081606091031261011357604080519161143383610b0b565b805161143e81610978565b8352602081015161144e81610978565b6020840152015161145e81610978565b604082015290565b6040519061147382610b26565b8160a06000918281528260208201528260408201528260608201528260808201520152565b906104856115546060610bb9946114bc6114b761015860045460ff1690565b61137a565b6040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152928101516080830152919091015160a08201527f36a1b7b482b4f6518d97d78a967ac9ab4174ab910ac459d4601b65dd5bbae5b39060c090a161153560036000541461139a565b61153d610b7f565b90600060208095848280809751830101910161141a565b9761156a8451801590811561168c575b506113ba565b61157434156113da565b61158b61158461024c8b5161096c565b33146113fa565b604051600081527f97e6c0b572406a8481e0ca15b9aa02f41d87fd377e12a6c0720f772fcd35d5db90602090a101526115f86115ef60406115ca611466565b986115d86103c4825161096c565b6102636115e78783015161096c565b878c01610c7b565b60408801610c7b565b01805151611611906001600160a01b0316838701610c7b565b8281510151608086015251015160a084015261162d6004600055565b61163643600155565b610477604051938492830191909160a08060c0830194600180831b038082511685528060208301511660208601528060408301511660408601526060820151166060850152608081015160808501520151910152565b90506001541438611564565b919082602091031261011357604051602081016001600160401b038111828210176116c7575b60405291358252565b6116cf610a96565b6116be565b6001600160a01b0390911681529051602082015260400190565b906101409182818303126101135760409081519361170b85610b41565b815161171681610978565b85526020908183015161172881610978565b828701528383015161173981610978565b848701526060938484015161174d81610978565b8588015285609f850112156101135780519561176887610aad565b869285019481861161011357608001925b85841061178f5750505050505050608082015290565b86848303126101135784879184516117a681610b0b565b865181528287015183820152858701516117bf81610c9d565b86820152815201930192611779565b9060028110156117df5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6000611861928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152600160648201526064815261183a81610b41565b5193165af161185161184a6118a7565b8092611909565b50602080825183010191016118f4565b90565b6000916118619383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261183a81610b41565b3d156118ef573d906001600160401b0382116118e2575b604051916118d6601f8201601f191660200184610b5c565b82523d6000602084013e565b6118ea610a96565b6118be565b606090565b90816020910312610113575161186181610c9d565b156119115790565b80511561192057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156119415790565b80511561195057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190604080519061197982610aad565b60005b8181106119df575050809360005b6002811061199757505052565b6119a181836117ce565b516119ac82856117ce565b526119b781846117ce565b5060001981146119c95760010161198a565b634e487b7160e01b600052601160045260246000fd5b6020906119ea610c37565b818501520161197c565b908160c09103126101135760a060405191611a0e83610b26565b8051611a1981610978565b83526020810151611a2981610978565b60208401526040810151611a3c81610978565b60408401526060810151611a4f81610978565b606084015260808101516080840152015160a082015290565b908160c09103126101135760a060405191611a8283610b26565b8051611a8d81610978565b83526020810151611a9d81610978565b60208401526040810151611ab081610978565b604084015260608101516060840152608081015160808401520151611ad481610978565b60a082015290565b506040513d6000823e3d90fd5b611af4600254610a5c565b80611afc5750565b601f8111600114611b0f57506000600255565b6002600052611b5490601f0160051c600080516020611bfd833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610d07565b6000602081208160025555565b60008091611bb7938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526001604482015260448152611ba081610af0565b5193165af1611851611bb06118a7565b8092611939565b1561011357565b60009190611bb793838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152611ba081610af056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 8901,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:58:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:68:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:82:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:89:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:93:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:101:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Oracle_setPullDetails": Oracle_setPullDetails,
  "Oracle_verifyNftSubmitted": Oracle_verifyNftSubmitted,
  "Puller": Puller,
  "Submitter": Submitter
  };
export const _APIs = {
  Oracle: {
    setPullDetails: Oracle_setPullDetails,
    verifyNftSubmitted: Oracle_verifyNftSubmitted
    }
  };
