---
title: "Language-Mixed CoT: Training Multilingual Reasoning Models"
description: "Language-Mixed CoT studies reasoning distillation across languages through Korean model training and evaluation. ICLR 2026 research coauthored by Hitesh Patel."
permalink: /research/language-mixed-cot/
last_modified_at: 2026-10-06
paper:
  title: "Pushing on Multilingual Reasoning Models with Language-Mixed Chain-of-Thought"
  url: "https://proceedings.iclr.cc/paper_files/paper/2026/hash/804b5e300c9ed4e3ea3b073f186f4adc-Abstract-Conference.html"
  doi: "10.48550/arXiv.2510.04230"
  publisher:
    name: "International Conference on Learning Representations"
    url: "https://iclr.cc/"
  authors:
    - Guijin Son
    - Donghun Yang
    - Hitesh Laxmichand Patel
    - Amit Agarwal
    - Hyunwoo Ko
    - Chanuk Lim
    - Srikant Panda
    - Minhyuk Kim
    - Nikunj Drolia
    - Dasol Choi
    - Kyong-Ha Lee
    - Youngjae Yu
---

**Language-Mixed CoT** studies reasoning traces that combine English with a target language. The work investigates whether this structure can improve reasoning distillation outside English, using Korean as a case study.

**Authors:** {{ page.paper.authors | join: ", " }}. **Venue:** ICLR 2026.

## Training and evaluation

The study curates Korean prompts and model-generated reasoning traces, then trains nine models across six model families. It evaluates both the language-mixed approach and alternatives on nine Korean reasoning benchmarks.

The released models, datasets, and curation pipeline support further work on multilingual reasoning. This research connects to my interest in how training data and reasoning patterns shape model capabilities across languages.

## Paper, models, and data

- [Official ICLR 2026 publication record](https://proceedings.iclr.cc/paper_files/paper/2026/hash/804b5e300c9ed4e3ea3b073f186f4adc-Abstract-Conference.html)
- [Models and data](https://huggingface.co/KOREAson)
- [Preprint and DOI](https://doi.org/10.48550/arXiv.2510.04230)

Explore [multilingual alignment](/research/multilingual-alignment/) and [research themes](/research/).
