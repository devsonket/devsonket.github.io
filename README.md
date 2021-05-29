[![Build Status](https://travis-ci.org/devsonket/devsonket.github.io.svg?branch=develop)](https://travis-ci.org/devsonket/devsonket.github.io) [![Website](https://img.shields.io/website-up-down-green-red/https/shields.io.svg?label=devsonket)](https://devsonket.github.io) [![Open Issue](https://img.shields.io/github/issues-raw/devsonket/devsonket.github.io.svg)](https://github.com/devsonket/devsonket.github.io/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/devsonket/devsonket.github.io.svg)](https://github.com/devsonket/devsonket.github.io/graphs/contributors)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![T-Shirt Sponsor - Blace](https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.0-9/134396747_3729637350448926_8167604635320423942_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=uzb-SKXa37AAX8L7TiH&_nc_oc=AQmie27vpmxCa2HQuAPx9O1f11i-gQi6YhMr7UJ79tRoK9DKu5DV2exqmNKPqBXIMFc&_nc_ht=scontent.fcgp7-1.fna&oh=2eab822bc886f0f3f27d2ab38893fc14&oe=601A3155)](https://blace.com.bd/)

## উদ্দেশ্য

ডেভেলপারদের জন্যে চিটশিট খুবই কাজের জিনিস। আমাদের পক্ষে অনেক কমান্ড বা কোনো লাইব্রেরীর সব ফাংশন একসাথে মনে রাখা সম্ভব হয় না। সেক্ষেত্রে আমরা যদি একটা লিস্ট করি যে অমুক কমান্ড বা ফাংশন অমুক কাজ করে তাহলে খুব সহজেই পরবর্তিতে কেউ কাজ করতে গেলে শুধুমাত্র এই লিস্টগুলো দেখলেই প্রয়োজনীয় সবকিছু খুঁজে পাবে। আমরা আমাদের পুরো নলেজটাকে বিভিন্ন বিভাগে ভাগ করে শুধুমাত্র আসল ফাংশানালিটিগুলো খুব ছোট্টো করে বর্ণনা দিয়ে লিস্ট করতে পারি। যেগুলোতে পরবর্তিতে কোনো ডেভেলপার জাস্ট একটু চোখ বুলিয়ে নিলেই তার কাঙ্ক্ষিত জিনিসটা খুঁজে পাবে। এরকম চিটশিট [এখানেও](https://devhints.io/) পাবেন। কিন্তু আমাদের লক্ষ্য হচ্ছে সম্পূর্ণ বাংলায় চিটশিট করা।

## কিভাবে কাজ করে

এই প্রোজেক্ট পুরোপুরি গিটহাব বেইসড। এখানেই [**data**](https://github.com/devsonket/devsonket.github.io/tree/develop/data) নামক ডিরেক্টরির ভিতরে আমাদের সবগুলো চিটশীট **json** ফাইল আকারে আছে। আমাদের মেইন অ্যাপ্লিকেশন এখান থেকেই ডাটাগুলো নিয়ে শো করাবে। আমাদের বর্তমানে দুই ফরম্যাটের চিটশীট সাপোর্ট করছে।

- কোড এবং বর্ণনা সহ ফরম্যাট([এখানে ডেমো দেখুন](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/codendesc.json))
- শুধুমাত্র কোড([এখানে ডেমো দেখুন](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/onlycode.json))
- মিক্স ([এখানে ডেমো দেখুন](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/mix.json))

_ভবিষ্যতে নতুন কোনো ফরম্যাটের প্রয়োজন হলে অবশ্যই অ্যাড করা হবে। আপনি চাইলে [এখান থেকে](https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A7%87%20%E0%A6%AB%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F&body=%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%AC%E0%A6%B2%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%AB%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F) একটা ইস্যু তৈরী করতে পারবেন নতুন ফরম্যাট তৈরী করার জন্যে_

## কিভাবে কন্ট্রিবিউট করবেন

এখানে যেহেতু আমরা **json** ফাইল নিয়ে কাজ করছি তাই অনেকেই হয়তো **json** এর সাথে পরিচিত নাও থাকতে পারেন। সে উদ্দেশ্যে আমরা একটা [**draft**](https://github.com/devsonket/devsonket.github.io/tree/develop/data/draft) ডিরেক্টরিও রেখেছি **data** ডিরেক্টরির ভিতরে। আপনি যদি **json** ফাইল দিয়ে কন্ট্রিবিউট নাও করতে পারেন তাহলে আপনার যেকোনো ফরম্যাটে তৈরী করা চিটশিট পরিষ্কার টাইটেলসহ ড্রাফট ফোল্ডারে পুশ করে দিতে পারবেন। আবার একই সাথে আপনি চাইলে ড্রাফট ফোল্ডার থেকে কোনো ড্রাফট নিয়ে সেটাও **json** আকারে কনভার্ট করে আসল **data** ডিরেক্টরির ভিতরে পুশ করে দিতে পারেন। তো এভাবেই আপনি চাইলে **৪ রকমভাবে** এই প্রোজেক্টে কন্ট্রিবিউট করতে পারবেনঃ

- বাংলায় যেকোনো টপিকের উপর চিটশিট **json** ফরম্যাটে আমাদের ফরম্যাট যেকোনোভাবে মেইন্টেইন করে পুশ করতে পারবেন
- বাংলায় যেকোনো টপিকের উপর চিটশিটের ড্রাফট যেকোনো ফরম্যাটেই পুশ করতে পারবেন
- অন্যের ড্রাফটগুলোকে আমাদের কাঙ্ক্ষিত **json** ফরম্যাটে কনভার্ট করে পুশ করতে পারবেন

এখানে প্রধান কয়েকজন কন্ট্রিবিউটর থাকবে যারা একটা চিটশিটকে আসল ওয়েবসাইটে দেখানোর কাজটা করবে। সেক্ষেত্রে যারা আমাদের কন্ট্রিবিউটর লিস্টে বেশী কন্ট্রিবিউট করবে অথবা যেকেউ যদি যথেষ্ট দায়িত্ববান মনে হয় তাহলে তাকে পুরো অরগাইনেজশনের অ্যাডমিন লিস্টে যুক্ত করা হবে।

## আইডিয়া খুঁজছেন?

আপনি যদি কোন টপিকের উপর চিটশিট করবেন সেটা বুঝতে না পারেন, তাহলে আমাদের [প্রোজেক্ট বোর্ড](https://github.com/devsonket/devsonket.github.io/projects/1?fullscreen=true) থেকে আইডিয়া নিতে পারবেন। [এখানে](https://github.com/devsonket/devsonket.github.io/projects/1?fullscreen=true) মূলত আমরা গুরুত্বপূর্ণ যে যে চিটশিটগুলো সবার কাজে আসবে সেগুলোর লিস্ট আপডেটেড রাখছি।

## কেনো করবেন?

হ্যাঁ, আমাদের এখানে লক্ষ্যই হচ্ছে বাংলাতে একটা বড় চিটশিটের ভান্ডার গড়ে তোলা। [এটা](https://github.com/devsonket) সম্পূর্ণ স্বাধীন এবং ওপেন সোর্স গিটহাব অর্গানাইজেশন। এটা কারো ব্যক্তিমালিকানাধীন নয়। আমি আপনি সবাই মিলেই আমাদের লক্ষ্যে পৌছাবো।

## কমিউনিটির আলোচনা

আমাদের ফেস্‌বুকে একটা গ্রুপ আছে। [এই লিঙ্কে](https://www.facebook.com/groups/675646289594096) ক্লিক করে সেখানে জয়েন করতে পারবেন। আপনার কোনো ব্যাপারে সহায়তা লাগলে, কোনো রকম সাজেশন থাকলে অথবা যেকোনো ব্যাপারে খোলামেলাভাবে সেখানে আমাদের সবার সাথে আলোচনা করতে পারবেন।

## স্পন্সর(বিশেষভাবে ধন্যবাদ)

- [Nazir Ahmed Sabbir](https://github.com/NaSabbir)
- [Blace](https://blace.com.bd/)

আপনিও যদি **ডেভ সংকেত**কে কোনোভাবে স্পন্সর করতে চান, অথবা **ডেভ সংকেত** এর হয়ে কোনো ইভেন্টের আয়োজন করতে চান তাহলে অবশ্যই আমাদের জানাবেন।
