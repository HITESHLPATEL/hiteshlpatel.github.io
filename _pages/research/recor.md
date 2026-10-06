---
title: "RECOR: Conversational Retrieval with Reasoning"
description: "RECOR evaluates reasoning-based conversational retrieval across 707 conversations and eleven domains. ACL 2026 Findings research coauthored by Hitesh Patel."
permalink: /research/recor/
last_modified_at: 2026-10-06
paper:
  title: "RECOR: Reasoning-focused Multi-turn Conversational Retrieval Benchmark"
  url: "https://aclanthology.org/2026.findings-acl.129/"
  doi: "10.18653/v1/2026.findings-acl.129"
  authors:
    - Mohammed Ali
    - Abdelrahman Abdallah
    - Amit Agarwal
    - Hitesh Laxmichand Patel
    - Adam Jatowt
---

**RECOR** evaluates information retrieval that depends on both conversation history and reasoning. The benchmark contains **707 conversations and 2,971 turns across eleven domains**.

**Authors:** {{ page.paper.authors | join: ", " }}. **Venue:** ACL 2026 Findings.

## What the benchmark measures

A decomposition and verification pipeline builds conversations from source-grounded facts, with explicit retrieval reasoning for each turn. Evaluation examines how history and reasoning change retrieval quality and identifies remaining difficulty with implicit logical connections.

The paper reports an increase in nDCG@10 from 0.236 to 0.479 when combining conversation history and reasoning in its evaluated setting. The results inform the retrieval component of systems that must follow a user's information needs across multiple turns.

## Paper, data, and code

- [Original paper and publication record](https://aclanthology.org/2026.findings-acl.129/)
- [Benchmark data and code](https://github.com/RECOR-Benchmark/RECOR)
- DOI: [10.18653/v1/2026.findings-acl.129](https://doi.org/10.18653/v1/2026.findings-acl.129)

Explore [enterprise retrieval](/research/enterprise-retrieval/) and [research themes](/research/).
