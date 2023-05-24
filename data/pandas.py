import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

import re
import string

df_fake = pd.read_csv("/data/Fake.csv")
df_true = pd.read_csv("/data/True.csv")

df_fake.head()

