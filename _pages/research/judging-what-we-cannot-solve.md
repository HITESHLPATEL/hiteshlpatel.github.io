---
title: "Judging What We Cannot Solve: Evaluating Research-Level Math"
description: "Consequence-Based Utility evaluates difficult mathematical solutions through their usefulness on related, verifiable questions. Research coauthored by Hitesh Patel."
permalink: /research/judging-what-we-cannot-solve/
last_modified_at: 2026-10-27
paper:
  title: "Judging What We Cannot Solve: A Consequence-Based Approach for Oracle-Free Evaluation of Research-Level Math"
  url: "https://proceedings.mlr.press/v306/son26a.html"
  identifier: "pmlr-v306-son26a"
  publisher:
    name: "Proceedings of Machine Learning Research"
    url: "https://proceedings.mlr.press/"
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

- [Official ICML 2026 proceedings and author record](https://proceedings.mlr.press/v306/son26a.html)

Explore my [selected papers](/#selected-papers) and [more publications](/publications/).
