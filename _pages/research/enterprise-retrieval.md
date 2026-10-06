---
title: "Hard-Negative Mining for Enterprise Retrieval"
description: "Research on hard-negative mining for training domain-specific retrieval rerankers in enterprise search and RAG. ACL 2025 research coauthored by Hitesh Patel."
permalink: /research/enterprise-retrieval/
last_modified_at: 2026-10-06
paper:
  title: "Hard Negative Mining for Domain-Specific Retrieval in Enterprise Systems"
  url: "https://aclanthology.org/2025.acl-industry.72/"
  doi: "10.18653/v1/2025.acl-industry.72"
  authors:
    - Hansa Meghwani
    - Amit Agarwal
    - Priyaranjan Pattnayak
    - Hitesh Laxmichand Patel
    - Srikant Panda
---

**Hard Negative Mining for Domain-Specific Retrieval** studies training examples that are semantically similar to a query but irrelevant to its actual information need. These challenging negatives help train rerankers for enterprise search and downstream RAG applications.

**Authors:** {{ page.paper.authors | join: ", " }}. **Venue:** ACL 2025 Industry Track.

## Retrieval training method

The framework combines multiple embedding models with dimensionality reduction to select useful hard negatives efficiently. The paper evaluates the approach on a cloud-services corpus and additional public domain-specific retrieval datasets.

This work contributes to my interest in grounding AI systems in relevant evidence, including the retrieval components used in conversational and agentic workflows.

## Paper and citation

- [Original paper and publication record](https://aclanthology.org/2025.acl-industry.72/)
- DOI: [10.18653/v1/2025.acl-industry.72](https://doi.org/10.18653/v1/2025.acl-industry.72)

Explore [conversational retrieval with RECOR](/research/recor/) and [more publications](/publications/).
