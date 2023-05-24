import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

import re
import string

df_fake = pd.read_csv("/data/Fake.csv")
df_true = pd.read_csv("/data/True.csv")

df_fake.head()


df_true.head(5)

df_fake["class"] = 0
df_true["class"] = 1

df_fake.shape, df_true.shape

df_fake_manual_testing["class"] = 0
df_true_manual_testing["class"] = 1

df_true_manual_testing.head(10)
df_false_manual_testing.head(10)