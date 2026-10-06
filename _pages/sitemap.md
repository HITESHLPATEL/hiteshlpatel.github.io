---
layout: archive
title: "Sitemap"
description: "Explore Hitesh Laxmichand Patel's research, projects, publications, professional profile, talks, community service, and awards."
permalink: /sitemap/
author_profile: true
---

## Explore the site

- [About Hitesh](/)
- [Research themes and papers](/research/)
{% for paper in site.data.featured_research %}
  - [{{ paper.title }}](/research/{{ paper.slug }}/)
{% endfor %}
  - [SweEval: Multilingual enterprise AI safety](/research/sweeval/)
- [Projects at Oracle](/projects/)
- [Selected publications](/publications/)
- [Professional profile](/cv/)
- [Research news](/news/)
- [Invited talks](/talks/)
- [Community service](/service/)
- [Recognition and awards](/awards/)

A [sitemap in XML format](/sitemap.xml) is also available.
