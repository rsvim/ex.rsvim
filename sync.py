#!/usr/bin/env python3

# Formatted with ruff.

import logging
import os
from pathlib import Path

CWD = Path(os.getcwd())
RSVIM_TYPES = CWD.parent / "rsvim" / "types"
PLUGIN_TYPES = CWD / "vendor" / "@rsvim" / "types"


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_TYPES:{RSVIM_TYPES}")
    logging.info(f"PLUGIN_TYPES:{PLUGIN_TYPES}")

    command = f"rm -rf {PLUGIN_TYPES}"
    logging.info(f"Run: {command}")
    os.system(command)
    command = f"cp -rf {RSVIM_TYPES} {PLUGIN_TYPES}"
    logging.info(f"Run: {command}")
    os.system(command)
