---
layout: archive
title: "Research"
description: "Hitesh Laxmichand Patel's research on LLM post-training, agentic retrieval, reasoning evaluation, multilingual alignment, and AI fairness."
schema_type: CollectionPage
last_modified_at: 2026-10-06
permalink: /research/
author_profile: true
---

My research connects model training, retrieval, and evaluation: how to develop AI systems that reason across languages, use relevant evidence, and remain reliable on difficult tasks. The papers below are collaborative work, with links to the original publications and available research artifacts.

## Training and aligning reasoning models

I study how training data and post-training objectives shape reasoning and consistency across languages. [Language-Mixed CoT](/research/language-mixed-cot/) explores reasoning distillation for Korean language models; [multilingual alignment](/research/multilingual-alignment/) studies fine-tuning with equivalent examples across languages. My [work on Oracle Code Assist](/projects/) also connects continued pretraining and preference-based post-training to coding tasks.

## Retrieval and agentic systems

I'm interested in systems that retrieve relevant knowledge, use tools, and maintain coherence through multi-step workflows. [RECOR](/research/recor/) studies retrieval requiring conversation history and reasoning, while [enterprise hard-negative mining](/research/enterprise-retrieval/) improves the reranking component of domain-specific search and RAG. These retrieval contributions inform my interest in grounding agentic systems in reliable evidence.

## Evaluation when verification is difficult

[Judging What We Cannot Solve](/research/judging-what-we-cannot-solve/) investigates how a proposed mathematical solution's usefulness on related, verifiable questions can provide an evaluation signal. This connects to my interests in model judges, reward signals, benchmark validity, and evaluating reasoning beyond easily checked answers.

## Safety, fairness, and multimodal reliability

[AccessEval](/research/accesseval/) measures disability bias in LLM responses; [SweEval](/research/sweeval/) evaluates unsafe language in multilingual enterprise communication; and [PCRI](/research/pcri/) measures sensitivity to distracting visual context. These studies complement my work on AI guardrails, multilingual models, and document intelligence.

## Featured papers

{% include featured-research.html %}

See [more publications](/publications/), [projects at Oracle](/projects/), and [research talks](/talks/).
