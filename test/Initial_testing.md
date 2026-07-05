# Testing
July 5th, 2026 Testing Result

## Description
This test was ran to benchmark and learn how to run a local model via intel's vllm docker image.

## Goal
Successfully run Qwen/Qwen2.5-7B-Instruct-AWQ on a single Arc A770 GPU.

### Known Constraints/Issue
The Arc A770 (Alchemist/Xe-HPG) lacks native FP64 hardware support. vLLM's XPU topk/topp sampler kernel requires FP64, so we enabled double-precision emulation (OverrideDefaultFP64Settings=1, IGC_EnableDPEmulation=1) as a workaround. We also fell back to the Triton attention backend since the default FlashAttention XPU kernel only supports Xe2/Xe3.

## Used Commands

Run benchmark
```bash
vllm bench serve --model Qwen/Qwen2.5-7B-Instruct-AWQ --dataset-name random --random-input-len=512 --random-output-len=512 --num-prompt 20 --max-concurrency 4 --temperature=0 --request-rate inf --backend vllm --port=8000 --host 0.0.0.0
```

## Result
```bash
============ Serving Benchmark Result ============
Successful requests:                     20        
Failed requests:                         0         
Maximum request concurrency:             4         
Benchmark duration (s):                  167.76    
Total input tokens:                      10240     
Total generated tokens:                  10240     
Request throughput (req/s):              0.12      
Output token throughput (tok/s):         61.04     
Peak output token throughput (tok/s):    92.00     
Peak concurrent requests:                8.00      
Total token throughput (tok/s):          122.08    
---------------Time to First Token----------------
Mean TTFT (ms):                          4801.37   
Median TTFT (ms):                        4878.61   
P99 TTFT (ms):                           9617.95   
-----Time per Output Token (excl. 1st token)------
Mean TPOT (ms):                          56.26     
Median TPOT (ms):                        54.27     
P99 TPOT (ms):                           65.42     
---------------Inter-token Latency----------------
Mean ITL (ms):                           56.26     
Median ITL (ms):                         54.56     
P99 ITL (ms):                            63.86     
==================================================
```

### Result Explanation
The Initial test ran succesfully. 
- Successful requests: 20 / Failed requests: 0
    - No failed runs
- Output token throughput (tok/s): 61.04     
- Peak output token throughput (tok/s): 92.00    
    - At about 8-12x human reading speed, this is usable speed.
- Mean TTFT (ms): 4801.37, Median TTFT (ms): 4878.61
    - Averages about 5 seconds for till first token
    - Slower than expected, likely caused by ``` --enforce-eager ``` command which disables compiling and was added for stability in this test

## What to test next
- Run the model without --enfore-eager flag
- Run a bigger model with it on both gpu.