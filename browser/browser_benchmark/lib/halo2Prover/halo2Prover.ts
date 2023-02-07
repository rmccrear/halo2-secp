import { expose } from "comlink";

const fetch_ipa_params = async (k: any) => {
  const cors_proxy = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(
    `${cors_proxy}https://zk-benchmark.s3.us-west-1.amazonaws.com/params_k_${k}.bin`
  );
  // const response = await fetch(
  //   `https://zk-benchmark.s3.us-west-1.amazonaws.com/params_k_${k}.bin`
  // );
  const bytes = await response.arrayBuffer();

  const params = new Uint8Array(bytes);
  return params;
};

export const generateProofSimpleCircuit = async () => {
  console.log("Simple circuit proof");
  const params = await fetch_ipa_params(5);

  const {
    default: init,
    initThreadPool,
    prove_simple_circuit,
    init_panic_hook
  } = await import("./wasm/halo2_efficient_ecdsa.js");

  console.log("number of threads", navigator.hardwareConcurrency);

  await init();
  await init_panic_hook();
  await initThreadPool(navigator.hardwareConcurrency);
  console.time("Full proving time");
  const proof = await prove_simple_circuit(params);
  console.timeEnd("Full proving time");
  console.log("proof", proof);
};

export const generateProofScalarMult = async () => {
  console.log("Scalar mult proof");
  const params = await fetch_ipa_params(11);

  const {
    default: init,
    initThreadPool,
    prove_scalar_mult,
    init_panic_hook
  } = await import("./wasm/halo2_efficient_ecdsa.js");

  console.log("number of threads", navigator.hardwareConcurrency);

  await init();
  await init_panic_hook();
  await initThreadPool(navigator.hardwareConcurrency);
  console.time("Full proving time");
  const proof = await prove_scalar_mult(params);
  console.timeEnd("Full proving time");
  console.log("proof", proof);
};

export const generateProofScalarMultFull = async () => {
  console.log("Scalar mult full proof");

  const params = await fetch_ipa_params(11);

  const {
    default: init,
    initThreadPool,
    prove_scalar_mult_full,
    init_panic_hook
  } = await import("./wasm/halo2_efficient_ecdsa.js");

  console.log("number of threads", navigator.hardwareConcurrency);

  await init();
  await init_panic_hook();
  await initThreadPool(navigator.hardwareConcurrency);
  console.time("Full proving time");
  const proof = await prove_scalar_mult_full(params);
  console.timeEnd("Full proving time");
  console.log("proof", proof);
};

const exports = {
  generateProofScalarMult,
  generateProofScalarMultFull,
  generateProofSimpleCircuit
};
export type Halo2Prover = typeof exports;

expose(exports);
