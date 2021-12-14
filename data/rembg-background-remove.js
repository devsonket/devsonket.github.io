{
  "id": "rembg",
  "title": "রেম্বিজি",
  "slug": "rembg",
  "description": "পাইথন এর রেম্বিজি দিয়ে ছবির ব্যকগ্রাউন্ড রিমোভার",
  "colorPref": "#FF9A00",
  "contents": [
    {
      "title": "প্রাথমিক কমান্ড সমূহ",
      "items": [
        {
          "definition": "পাইথন এ ভার্চুয়াল ইনভাইরনমেন্ট তৈরির পদ্ধতি",
          "code": "virtualenv env"
        },
        {
          "definition": "ভার্চুয়াল ইনভাইরনমেন্ট সক্রিয়(উইন্ডোজ)",
          "code": ".\env\Scripts\activate"
        },
        {
          "definition": "ভার্চুয়াল ইনভাইরনমেন্ট সক্রিয়(লিনাক্স)",
          "code": "source env/bin/activate"
        },
        {
          "definition": "পাইটর্চ ইন্সটল করার পদ্ধতি",
          "code": "pip install torch"
        },
        {
          "definition": "রেম্বিজি ইন্সটল করার পদ্ধতি",
          "code": "pip install rembg"
        },
      ]
    },
    {
      "title": "প্রাথমিক ব্যকগ্রাউন্ড রিমোভ করার কমান্ড",
      "items": [
        {
          "definition": "রিমোট সার্ভারে থাকা ছবির ব্যকগ্রাউন্ড রিমোভ",
          "code": "curl -s http://<ছবির ইউয়ারেল> | rembg > output.png"
        },
        {
          "definition": "লোকালে থাকা ছবির ব্যকগ্রাউন্ড রিমোভ"",
          "code": "rembg -o <আউটপুট ফাইল এর পাথ> <ইনপুট ফাইল এর পাথ>"
        },
        {
          "definition": "লোকালে থাকা ফোল্ডারের সব ছবির ব্যকগ্রাউন্ড একসাথে রিমোভ করতে",
          "code": "rembg -p <ইনপুট ফোল্ডারের নামে> <আউটপুট ফোল্ডারের নাম>"
        },
      ]
    }
  ]
}
