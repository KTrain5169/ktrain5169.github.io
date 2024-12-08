---
title: "Documenting my experiences from working with Nuxt (via NotEssential)"
tags: ["nuxt", "website", "nodejs", "documenting", "experiences"]
description: "I document my experiences with Nuxt so far, through maintaining NotEssential"
publishDate: "2024-12-8T21:25:46+1000"
author: "KTrain5369"
link: "/blog/working-with-nuxt"
---

Disclaimer: I actually wasn't a maintainer of NotEssential at the start, so some details may not be correct, but I joined fairly early on commits-wise and some of the details still hold true to this day.

<br>

NotEssential was one of the many descendents of what Pixel calls the "Fork Hell I", a collection of sites forked from LoopMC (the base site).

This eventually came out of hand for Pixel (as expected really), so when working for the Spirit Studios website, he decided to make usevital's & blryface's website a fork of the in-dev Spirit Studios site, which was made with Astro. (Conveniently and consequently, this started the Fork Hell II: The Sequel)

<br>

But none of the sites in Fork Hell I moved to Astro right away, understandable since these sites were made in spare time and they were still working well. After all, if it ain't broke, don't fix it. However, there were discussions recently surrounding making NotEssential part of Fork Hell II (or at least, rewritten in Astro). So I wanted to take the time to write down how my only experience with Nuxt has been, before it will inevitably have to be rewritten.

<br>

---

<br>

## **Positives**

Let's start with the positives. Partly because this is what everyone does first, and partly because I just wanted to get these done first.

<br>

Nuxt is actually pretty feature-rich. For starters, it has a ton more "integrations" (Astro calls them that, not sure how Nuxt calls it), partly because Nuxt is so much bigger and probably more well-known(?) (NotEssential was also my first serious webdev experience) than Astro, so there's more integrations possible. Astro does have some cool & neat integrations but I think I find Nuxt to have more.

<br>

Nuxt also has, dare I say, better i18n support. Astro _does_ have i18n support as well, but the official way is to create a whole replica of the page, just written in that language instead of English/whatever the main language is, which isn't suitable for NotEssential since we use JSON files for i18n, so that we can connect it to Crowdin. There is a "workaround" I guess, in using the content collections feature to do this (the content collections help page for Astro provides an example, and the content collections feature is utilised by this site for blogs and projects).

However, the way I see Nuxt doing i18n via the @nuxtjs/i18n module is much better. I won't explain it here for brevity, but you can see for yourself at <a class="text-blue-300 hover:text-blue-500" href="https://github.com/usevital/notessential/blob/main/i18n/">NotEssential's repo</a>.

<br>

---

<br>

## **Negatives**

Despite all this however, there are still issues I have with Nuxt. These aren't in any particular order other than my subconsiousness.

<br>

When I load up NotEssential in my devenv, it takes an absurdly long time to start up. Probably because Nuxt tells you the link to access the env immediately after running `nuxt dev`, but even so I look at the console and it takes a very very very _very_ long time to fully load the server.

<br>

A lot of Nuxt confuses me. Like, I'm not sure how, but a ton of it confuses me. it's not really that big a deal but confusion is an obstacle to learning (usually).

<br>

Nuxt appears to be very disorganized. In Astro you can have a frontmatter and all that, but in Nuxt there isn't really such a thing. This is more of a subjective thing but it very much irks me.

<br>

---

<br>

Anyways, that's why
