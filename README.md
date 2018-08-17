# Parity POA Chain Prototype

## Via docker
Make sure you have docker installed. If not, install [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) first.
```
docker-compose up
```

## Set Balance
Replace account address in spec.json with your account address, i.e.
```
{

        "name": "parity",
        "engine": {
        "authorityRound": {
            "params": {
                "gasLimitBoundDivisor": "0x400",
                "stepDuration": "2",
                "validators" : {
                    "list": [ "0x43b010da4d5d43f9417603f00108f45e89860248" ]
                }
            }
        }
    },

    "params": {
        "maximumExtraDataSize": "0x20",
        "minGasLimit": "0x1388",
        "gasLimitBoundDivisor": "0x400",
        "networkID" : "0x11"
    },
    "genesis": {
        "seal": {
            "authorityRound": {
                "step": "0x0",
                "signature": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
            }
        },
        "difficulty": "0x20000",
        "gasLimit": "0x1312D00"
    },
    "accounts": {
        "0x0000000000000000000000000000000000000001": { "balance": "1", "builtin": { "name": "ecrecover", "pricing": { "linear": { "base": 3000, "word": 0 } } } },
        "0x0000000000000000000000000000000000000002": { "balance": "1", "builtin": { "name": "sha256", "pricing": { "linear": { "base": 60, "word": 12 } } } },
        "0x0000000000000000000000000000000000000003": { "balance": "1", "builtin": { "name": "ripemd160", "pricing": { "linear": { "base": 600, "word": 120 } } } },
        "0x0000000000000000000000000000000000000004": { "balance": "1", "builtin": { "name": "identity", "pricing": { "linear": { "base": 15, "word": 3 } } } },
            "YOUR ACCOUNT ADDRESS HERE": { "balance": "CUSTOMIZE YOUR INITAL BALANCE HERE" }
    }

```
