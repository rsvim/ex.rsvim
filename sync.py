#!/usr/bin/env python3

# Formatted with ruff.

import logging
import os
from pathlib import Path

CWD = Path(os.getcwd())
RSVIM_TYPES = CWD.parent / "rsvim" / "types" / "01__rsvim.d.ts"
EX_TYPES = CWD / "types"


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_TYPES:{RSVIM_TYPES}")
    logging.info(f"EX_TYPES:{EX_TYPES}")

    command = f"cp {RSVIM_TYPES} {EX_TYPES}"
    logging.info(f"Run: {command}")
    os.system(command)
