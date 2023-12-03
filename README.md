## উদ্দেশ্য (motive)

ডেভেলপারদের জন্যে চিটশিট খুবই কাজের জিনিস। কারণ আমাদের পক্ষে অনেক কমান্ড বা কোনো লাইব্রেরীর সব ফাংশন একসাথে মনে রাখা সম্ভব হয় না। সেক্ষেত্রে আমরা যদি একটা তালিকা তৈরি করি যে অমুক কমান্ড বা ফাংশন অমুক কাজ করে তাহলে খুব সহজেই পরবর্তিতে কেউ কাজ করতে গেলে শুধুমাত্র সেই তালিকা দেখলেই প্রয়োজনীয় সবকিছু খুঁজে পাবেন। আমরা আমাদের পুরো জ্ঞানকে বিভিন্ন বিভাগে ভাগ করে শুধুমাত্র আসল ফাংশানালিটিগুলো খুব ছোট্ট করে বর্ণনা দিয়ে তালিকা তৈরি করতে পারি। যেগুলোতে পরবর্তিতে কোনো ডেভেলপার শুধু একটু চোখ বুলিয়ে নিলেই তার কাঙ্ক্ষিত জিনিসটা খুঁজে পাবেন। এরকম চিটশিট [এখানেও](https://devhints.io/) পাবেন। কিন্তু আমাদের লক্ষ্য হচ্ছে সম্পূর্ণ বাংলায় চিটশিট তৈরি করা।

## Motive

Cheatsheets are very handy for developers. Because it is not possible for us to remember many commands or all functions of a library at once. In that case, if we make a list that such a command or function does such a thing, then very easily when someone wants to work later, they can find everything they need just by looking at that list. We can divide our entire knowledge into different categories and list only the actual functionality very briefly. In which later a developer will find what he wants with just a quick glance. Similar cheatsheets are available [here](https://devhints.io/). But our aim is to make cheat sheet in full Bengali. in future if you need we try to make the cheatsheet in english also.


## কিভাবে কাজ করে (How do it Works?)

এই প্রজেক্টটি পুরোপুরি গিটহাব ভিত্তিক। এখানেই [**data**](https://github.com/devsonket/devsonket.github.io/tree/develop/data) নামক ডিরেক্টরির ভিতরে আমাদের সবগুলো চিটশীট **json** ফাইল আকারে সাজানো আছে। আমাদের মেইন অ্যাপ্লিকেশন এখান থেকেই ডাটাগুলো নিয়ে প্রদর্শন করাবে। আমাদের বর্তমানে দুই ফরম্যাটের চিটশীট সাপোর্ট করছে।

## How do it Works?

This project is completely GitHub based. This is where all our cheatsheets are organized as **json** files inside a directory called [**data**](https://github.com/devsonket/devsonket.github.io/tree/develop/data). Our main application will display the data from here. We currently support two formats of cheatsheets.

- কোড এবং বর্ণনা সহ ফরম্যাট([এখানে ডেমো দেখুন](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/codendesc.json))

- Format with code and description([See demo here](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/codendesc.json))

- শুধুমাত্র কোড([এখানে ডেমো দেখুন](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/onlycode.json))
- মিক্স ([এখানে ডেমো দেখুন](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/mix.json))
                  
- Code Only([See demo here](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/onlycode.json))
- mix ([see demo here](https://github.com/devsonket/devsonket.github.io/blob/develop/data/demo/mix.json))


_ভবিষ্যতে নতুন কোনো ফরম্যাটের প্রয়োজন হলে অবশ্যই যোগ করা হবে। আপনি চাইলে [এখান থেকে](https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A7%87%20%E0%A6%AB%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F&body=%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%AC%E0%A6%B2%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%AB%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F) একটা ইস্যু তৈরী করতে পারবেন নতুন ফরম্যাট তৈরী করার জন্যে_

_Any new formats will be added in future if needed. If you want [from](https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A7%87%20%E0%A6%AB%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F&body=%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%AC%E0%A6%B2%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%AB%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F) can create an issue to create a new format_

## কিভাবে কনট্রিবিউট করবেন  (How to Contribute)

এখানে যেহেতু আমরা **json** ফাইল নিয়ে কাজ করছি তাই অনেকেই হয়তো **json** এর সাথে পরিচিত নাও থাকতে পারেন। সে উদ্দেশ্যে আমরা একটা [**draft**](https://github.com/devsonket/devsonket.github.io/tree/develop/data/draft) ডিরেক্টরিও রেখেছি **data** ডিরেক্টরির ভিতরে। আপনি যদি **json** ফাইল দিয়ে কনট্রিবিউট করতে নাও পারেন তাহলে আপনার যেকোনো ফরম্যাটে তৈরী করা চিটশিট পরিষ্কার টাইটেলসহ ড্রাফট ফোল্ডারে পুশ করে দিতে পারবেন। আবার একই সাথে আপনি চাইলে ড্রাফট ফোল্ডার থেকে কোনো ড্রাফট নিয়ে সেটাও **json** আকারে কনভার্ট করে আসল **data** ডিরেক্টরির ভিতরে পুশ করে দিতে পারেন। তো এভাবেই আপনি চাইলে **৪ রকমভাবে** এই প্রজেক্টে কনট্রিবিউট করতে পারবেনঃ

## How to Contribute

Since we are dealing with **json** files here, many may not be familiar with **json**. For that purpose we also put a [**draft**](https://github.com/devsonket/devsonket.github.io/tree/develop/data/draft) directory inside the **data** directory. If you can't contribute with a **json** file, you can push your cheatsheet in any format to the draft folder with a clean title. At the same time, if you want, you can take a draft from the draft folder and convert it to **json** format and push it inside the original **data** directory. So this is how you can contribute to this project in **4 ways** if you want:


- বাংলায় যেকোনো টপিকের উপর চিটশিট **json** ফরম্যাটে আমাদের ফরম্যাট যেকোনোভাবে মেইন্টেইন করে পুশ করতে পারবেন
- বাংলায় যেকোনো টপিকের উপর চিটশিটের ড্রাফট যেকোনো ফরম্যাটেই পুশ করতে পারবেন
- অন্যের ড্রাফটগুলোকে আমাদের কাঙ্ক্ষিত **json** ফরম্যাটে কনভার্ট করে পুশ করতে পারবেন

- You can push cheatsheets on any topic in Bengali **json** format by maintaining our format in any way.
- You can push cheat sheet draft on any topic in Bengali in any format.
- Can convert other's drafts to our desired **json** format and push.

এখানে প্রধান কয়েকজন কনট্রিবিউটর থাকবে যারা একটা চিটশিটকে আসল ওয়েবসাইটে দেখানোর কাজটা করবে। সেক্ষেত্রে যারা আমাদের কনট্রিবিউটরদের তালিকায় বেশী কনট্রিবিউট করবে অথবা যেকেউ যদি যথেষ্ট দায়িত্ববান মনে হয় তাহলে তাকে পুরো সংগঠনের অ্যাডমিনদের তালিকায় যুক্ত করা হবে।
**English**

There will be a few main contributors who will do the work of showing a cheatsheet on the original website. In that case those who will contribute more in our list of contributors or if anyone seems responsible enough then he will be added to the list of admins of the whole organization.

## Contributing Guidelines📝

You are welcome to contribute to this project.
To start contributing, follow the below guidelines:
1. Fork this repository.
2. Clone your forked copy of the project.
git clone https://github.com/<your_user_name>/devsonket.github.io.git
3. Navigate to the project directory 📁
cd devsonket
4. Add a reference(remote) to the original repository.
git remote add upstream (https://github.com/devsonket/devsonket.github.io.git)
5. Check the remotes for this repository.
git remote -v
6. Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).
git pull upstream main
7. Create a new branch.
git checkout -b <your_branch_name>
8. Perform your desired changes to the code base.
9. Track your changes ✔️.
git add .
10. Commit your changes.
git commit -m "Relevant message"
11. Push the committed changes in your feature branch to your remote repo.
git push -u origin <your_branch_name>
12. To create a pull request, click on compare and pull requests.
13. Add an appropriate title and description to your pull request explaining your changes and efforts.
14. Click on Create Pull Request.
15. Woohoo!🥳 You have made a PR to the **devsonket**. Wait for your submission to be accepted and your PR to be merged.
You made it! 🎊

## আইডিয়া খুঁজছেন?(Want an idea?) 

আপনি যদি কোন টপিকের উপর চিটশিট করবেন সেটা বুঝতে না পারেন, তাহলে আমাদের [প্রোজেক্ট বোর্ড](https://github.com/devsonket/devsonket.github.io/projects/1?fullscreen=true) থেকে আইডিয়া নিতে পারবেন। [এখানে](https://github.com/devsonket/devsonket.github.io/projects/1?fullscreen=true) মূলত আমরা গুরুত্বপূর্ণ যে সকল চিটশিটগুলো সবার কাজে আসবে সেগুলোর তালিকা আপডেটেড রাখছি।

## Want an idea? 

If you don't know what topic to cheatsheet on, you can get ideas from our [project board](https://github.com/devsonket/devsonket.github.io/projects/1?fullscreen=true). [Here](https://github.com/devsonket/devsonket.github.io/projects/1?fullscreen=true) Basically we keep updated list of important cheatsheets that will be useful for everyone.

## কেন কনট্রিবিউট করবেন?(Why you should contribute?)  

হ্যাঁ, আমাদের এখানে লক্ষ্যই হচ্ছে বাংলাতে একটা বড় চিটশিটের ভান্ডার গড়ে তোলা। [এটা](https://github.com/devsonket) সম্পূর্ণ স্বাধীন এবং ওপেন সোর্স গিটহাব সংগঠন। এটি কারো ব্যক্তিমালিকানাধীন নয়। আমি আপনি সবাই মিলেই আমাদের লক্ষ্যে পৌছাবো।

## Why you should contribute?

Yes, our aim here is to build a big cheat sheet repository in Bengal. [It](https://github.com/devsonket) is a completely independent and open source GitHub organization. It is not privately owned. I will reach our goal together with all of you.


## কমিউনিটির আলোচনা (Discussions on Community)

আমাদের একটি ফেসবুক গ্রুপ রয়েছে। [এই লিঙ্কে](https://www.facebook.com/groups/675646289594096) ক্লিক করে সেখানে যুক্ত হতে পারবেন। আপনার কোনো ব্যাপারে সহায়তা প্রয়োজন হলে, কোনো রকম সাজেশন থাকলে অথবা যেকোনো ব্যাপারে খোলামেলাভাবে সেখানে আমাদের সবার সাথে আলোচনা করতে পারবেন।

## Discussions on Community

We have a Facebook group. You can join there by clicking [this link](https://www.facebook.com/groups/675646289594096). If you need any help, have any suggestion or discuss anything openly with all of us there.

## স্পন্সর(বিশেষভাবে ধন্যবাদ)**(Contributors)**

- [Nazir Ahmed Sabbir](https://github.com/NaSabbir)
- [Blace](https://blace.com.bd/)

আপনিও যদি **ডেভ সংকেত**কে কোনোভাবে স্পন্সর করতে চান, অথবা **ডেভ সংকেত** এর হয়ে কোনো ইভেন্টের আয়োজন করতে চান তাহলে অবশ্যই আমাদের জানাবেন।

If you also want to sponsor **Dev Signal** in any way, or organize an event for **Dev Signal** please let us know.