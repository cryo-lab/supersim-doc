---
title: "Installation"
description: "Learn how to quickly get started with SuperSIM."
--- 


## System Requirements

- **Operating System**: Ubuntu via CentOS7 (recommended)  
- **Python**: 3.7+  
- **C++ Toolchain**: GCC, CMake, Vcpkg  
- **pip**: Python package installer  

---

## Installation Steps (WSL / Ubuntu)

### 1. Python Dependencies

Install required Python libraries:

```bash
pip install -r requirements.txt 
```

### 2. Setup C++ Environment
#### 2.1 Install Vcpkg
```bash
sudo apt update
sudo apt install git build-essential curl unzip -y

git clone https://github.com/microsoft/vcpkg
cd vcpkg
./bootstrap-vcpkg.sh

./vcpkg install nlohmann-json
./vcpkg integrate install
```
#### 2.2 Configure Vcpkg in CMake
Edit your CMakeLists.txt file and add:
```bash
set(CMAKE_TOOLCHAIN_FILE /home/your_username/path_to/vcpkg/scripts/buildsystems/vcpkg.cmake)
```
Replace the path with your actual Vcpkg path.
### 3. Setup C++ Environment
Navigate to the build directory:
```bash
cd build
```
Then build:
```bash
cmake ..
cmake --build .
```
---
## Verifying Installation
### Python Inference
Run:
```bash
python inference_sim.py
```
You should see trace files like layer_record_XX generated.
### C++ Simulation
Run the simulation via Python:
```bash
python sim_core.py
```
Results will be printed in the terminal and saved to the ./records/ directory.

✅ You’re now ready to use SuperSIM!