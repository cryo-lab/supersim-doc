---
title: "Usage Guide"
description: "Learn how to quickly get started with SuperSIM."
---
## 🚀 1. Running the Inference for Neural Network Models (Python)

To config the inference (model, dataset, batch-size ...), check `'./config/InferenceConfig.py'`. And edit the configuration file:
### 🔧 Key Command-Line Arguments
#### **🧠 Model & Dataset**
```python
--dataset        # Dataset options: cifar10 | cifar100 | mnist | fashionmnist | JEC
--model          # Model options: VGG8 | DenseNet40 | LeNet5 | Transformer
```

#### **📦 Training Parameters**
```--batch_size     # Batch size (default: 64)
--seed           # Random seed (default: 66)
--log_interval   # Interval (in batches) for logging (default: 100)
--test_interval  # Interval (in epochs) for testing (default: 10)
--logdir         # Directory to save logs (default: log/default) 
```

#### **🔢 Data Format & Precision**
```--mode           # Data mode: WAGE | SC | FP
--inference      # Run in inference mode: 0 | 1
--SClen          # Length of stochastic bitstream (for SC mode)
--wl_weight      # Bit width for weights (default: 8)
--wl_activate    # Bit width for activations (default: 8)
--wl_error       # Bit width for error signals (default: 8)
```
#### **📐Architecture**
```
--subArray       # Sub-array size (number of rows, default: 128)
```
### ▶️ Running the Inference

Once the configuration is set, run the inference simulation using:
```
python inference_sim.py
```
After running, you’ll see trace outputs generated such as:
```'layer_record_XX'```

## ⚙️ 2. Running Simulations

SuperSIM supports hardware-level simulation to evaluate metrics such as **latency**, **area**, and **energy**.

---

### 🛠️ Configuring the Simulation

Ensure the C++ backend simulation settings in `SIMconfigs.csv` are properly configured. Below is an example setup:

| Parameter         | Value    | Description                                  |
|-------------------|----------|----------------------------------------------|
| `computing_mode`  | 1        | Inference mode (1 = enabled)                 |
| `model_name`      | LeNet5   | Name of the model used                       |
| `ArrNumY`         | 1        | Number of arrays along Y axis               |
| `ArrNumX`         | 1        | Number of arrays along X axis               |
| `ArrRowSize`      | 128      | Number of rows per array                    |
| `ArrColSize`      | 128      | Number of columns per array                 |
| `freq`            | 5        | Clock frequency (GHz)                       |
| `nBits`           | 1        | Bit precision                               |
| `memcell_type`    | NDRO     | Memory cell type (e.g., NDRO)               |
| `clocking_type`   | snake    | Clocking strategy (e.g., snake, pulse)      |
| `array_expscale`  | 1        | Expansion scale for arrays                  |
| `phase`           | 4        | Number of phases in clocking scheme         |
| `PDPath_Width`    | 2        | Pulse driver path width                     |
| `fastmode`        | 1        | Fast mode simulation toggle (1 = on)        |

> ⚠️ Make sure the model name and array size match your neural network configuration.

---

### ▶️ Running the Simulation

Navigate to the simulation directory:

```bash
cd ./SuperSIM/src/sim/
```
script will ~~internally call the C++ binary SuperSIM_Energy, which computes metrics such as~~: Now, it contains:

- Latency
- Area Size
- JJ Num
- Energy Consumption

### 📁 Output
- Results are printed in the terminal.
- Detailed logs and metrics are saved to:

```
../SuperSIM/src/sim/records/
```
You can use these results for benchmarking, comparison, or visualization.