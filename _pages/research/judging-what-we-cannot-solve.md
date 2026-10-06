---
title: "Judging What We Cannot Solve: Evaluating Research-Level Math"
description: "Consequence-Based Utility evaluates difficult mathematical solutions through their usefulness on related, verifiable questions. Research coauthored by Hitesh Patel."
permalink: /research/judging-what-we-cannot-solve/
last_modified_at: 2026-10-06
paper:
  title: "Judging What We Cannot Solve: A Consequence-Based Approach for Oracle-Free Evaluation of Research-Level Math"
  url: "https://arxiv.org/abs/2602.06291"
  doi: "10.48550/arXiv.2602.06291"
  publisher:
    name: "arXiv"
    url: "https://arxiv.org/"
  authors:
    - Guijin Son
    - Donghun Yang
    - Hitesh Laxmichand Patel
    - Hyunwoo Ko
    - Amit Agarwal
    - Sunghee Ahn
    - Kyong-Ha Lee
    - Youngjae Yu
---

**Judging What We Cannot Solve** studies evaluation of research-level mathematical solutions when direct verification is difficult. Its method, **Consequence-Based Utility**, tests whether a candidate solution helps a model solve related questions with verifiable answers.

**Authors:** {{ page.paper.authors | join: ", " }}. **Venue:** ICML 2026. **Recognition:** Spotlight.

## Evaluation method

Each candidate becomes an in-context example for nearby mathematical questions. Its effect on downstream performance provides a signal for ranking solutions. The study compares this approach with reward models, generative reward models, and LLM judges on problems paired with expert-written and model-generated solutions.

This work contributes to my interest in evaluating reasoning when a model's ability to judge is limited by its ability to solve the original task.

## Paper and citation

- [Original paper and author record](https://arxiv.org/abs/2602.06291)
- DOI: [10.48550/arXiv.2602.06291](https://doi.org/10.48550/arXiv.2602.06291)

Explore [research themes](/research/) and [more publications](/publications/).
