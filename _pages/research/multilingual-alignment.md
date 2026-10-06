---
title: "Multilingual Alignment for Enterprise LLMs"
description: "Research on fine-tuning LLMs with equivalent multilingual examples to improve consistency across languages. EMNLP 2025 research coauthored by Hitesh Patel."
permalink: /research/multilingual-alignment/
last_modified_at: 2026-10-06
paper:
  title: "Aligning LLMs for Multilingual Consistency in Enterprise Applications"
  url: "https://aclanthology.org/2025.emnlp-industry.9/"
  doi: "10.18653/v1/2025.emnlp-industry.9"
  authors:
    - Amit Agarwal
    - Hansa Meghwani
    - Hitesh Laxmichand Patel
    - Tao Sheng
    - Sujith Ravi
    - Dan Roth
---

**Aligning LLMs for Multilingual Consistency** studies performance differences between English and other languages in enterprise applications, including systems using retrieval-augmented generation.

**Authors:** {{ page.paper.authors | join: ", " }}. **Venue:** EMNLP 2025 Industry Track.

## Post-training method

The method places semantically equivalent examples in different languages into the same training batch. Fine-tuning with this structure aligns model behavior across languages and improves non-English accuracy in the study's evaluation while preserving English performance.

This work connects model alignment to practical multilingual tasks such as customer support, content moderation, and information retrieval. It informs my interest in post-training objectives that improve consistency across languages.

## Paper and citation

- [Original paper and publication record](https://aclanthology.org/2025.emnlp-industry.9/)
- DOI: [10.18653/v1/2025.emnlp-industry.9](https://doi.org/10.18653/v1/2025.emnlp-industry.9)

Explore [multilingual reasoning model training](/research/language-mixed-cot/) and [research themes](/research/).
