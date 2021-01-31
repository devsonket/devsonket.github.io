# Flutter Cheatsheet

Flutter গুগলের তৈরি একটি ফ্রেমওয়ার্ক যার মাধ্যমে android,iOS app এবং ওয়েবসাইট শুধুমাত্র একটি কোডবেস ব্যবহার করে তৈরি করা যায়। Flutter প্রতিটি প্ল্যাটফর্মের জন্য নেটিভলি কম্পাইল্ড হওয়াতে অন্যান্য ফ্রেমওয়ার্ক থেকে অনেক দ্রুত কাজ করে। 

# Table of contents
- [Flutter CLI tools](#flutter-cli-tools)
- [Hello world](#hello-world)
- [Stateless Widget](#stateless-widget)
- [Stateful Widget](#stateful-widget)
- [Required and default props](#required-and-default-props)
- [Combining props and state](#combining-props-and-state)
- [Lifecycle hooks](#lifecycle-hooks)
- [Android Ink effect](#android-ink-effect)
- [Gesture Detection](#gesture-detection)
- [Loading Indicator](#loading-indicator)
- [Platform specific code](#platform-specific-code)
- [Hide status bar](#hide-status-bar)
- [Lock orientation](#lock-orientation)
- [Show Alert](#show-alert)
- [Arrays](#arrays)
- [Card Layout](#card-layout)
- [Text Field](#text-field)
- [Slider](#slider)
- [Radio Button](#radio-button)
- [List builder](#list-builder)
- [Animation](#animation)
- [Responsive Header](#responsive-header)
- [Snackbar](#snackbar)


## Flutter CLI tools
ফ্লাটার সিএলাই বা কমান্ড লাইন টুলস এমন একটি টুল যার মাধ্যমে ডেভেলপাররা Flutter SDK এর সাথে ইন্টারাক্ট করে। 


কোন ভার্সন ইন্সটল দেওয়া আছে তা জানতে কমান্ড লাইনে টাইপ করুন : 
```bash
flutter --version
```
নতুন Flutter প্রোজেক্ট বানাতে টাইপ করুন :
```bash
flutter create <আপনার_প্রোজেক্টের_নাম>
```

যেসব ডিভাইস আপনার পিসির সাথে কানেক্টেড আছে তা জানতে টাইপ করুন 
```bash
flutter devices 
```
ওয়েব সাপোর্ট সহ নতুন প্রোজেক্ট বানাতে টাইপ করুন 
```bash
flutter channel beta
flutter upgrade
flutter config --enable-web
```
## Hello world

```dart
import 'package:flutter/material.dart';

void main() {
    runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hello world!',
      home: Scaffold(
        body: Center(
          child: Text('Hello world'),
        ),
      ),
    );
  }
}
```

## Stateless Widget
```dart
import 'package:flutter/material.dart';

class Greeter extends StatelessWidget {
  Greeter({Key key @required this.name}) : super(key: key);

  final String name;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hello, $name'),
    );
  }
}
```
## Stateful WIdget
```dart
import 'package:flutter/material.dart';

class WidgetWithState extends StatefulWidget {
  @override
  _WidgetWithStateState createState() => _WidgetWithStateState();
}

class _WidgetWithStateState extends State<WidgetWithState> {
  int counter = 0;

  increment() {
    setState(() {
      counter++;
    });
  }

  decrement() {
    setState(() {
      counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        FlatButton(onPressed: increment, child: Text('Increment')),
        FlatButton(onPressed: decrement, child: Text('Decrement')),
        Text(counter.toString()),
      ],
    );
  }
}
```
## Required and default props
```dart
import 'package:flutter/material.dart';

class SomeComponent extends StatelessWidget {
  SomeComponent({
    @required this.foo,
    this.bar = 'some string',
  });

  final String foo;
  final String bar;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('$foo $bar'),
    );
  }
}
```
## Combining props and state
```dart
import 'package:flutter/material.dart';

class SomeWidget extends StatefulWidget {
  SomeWidget({@required this.fruit});

  final String fruit;

  @override
  _SomeWidgetState createState() => _SomeWidgetState();
}

class _SomeWidgetState extends State<SomeWidget> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('$count ${widget.fruit}'),
    );
  }
}

class ParentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: SomeWidget(fruit: 'oranges'),
    );
  }
}
```
## Lifecycle hooks
```dart
class _MyComponentState extends State<MyComponent> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void didUpdateWidget(MyComponent oldWidget) {
    super.didUpdateWidget(oldWidget);
  }

  @override didChangeDependencies() {
    super.didChangeDependencies();
  }

  @override
  void dispose() {
    super.dispose();
  }
}
```
## Android Ink effect
```dart
InkWell(
  child: Text('Button'),
  onTap: _onTap,
  onLongPress: (){},
  onDoubleTap: (){},
  onTapCancel: (){},
);
```
## Gesture Detection
```dart
GestureDetector(
  onTap: (){},
  onLongPress: (){},
  child: Text('Button'),
);
```
## Loading Indicator
```dart
class SomeWidget extends StatefulWidget {
  @override
  _SomeWidgetState createState() => _SomeWidgetState();
}

class _SomeWidgetState extends State<SomeWidget> {
  Future future;

  @override
  void initState() {
    future = Future.delayed(Duration(seconds: 1));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: future,
      builder: (context, snapshot) {
        return snapshot.connectionState == ConnectionState.done
            ? Text('Loaded')
            : CircularProgressIndicator();
      },
    );
  }
}
```
## Platform specific code
```dart
import 'dart:io' show Platform;

if (Platform.isIOS) {
  doSmthIOSSpecific();
}

if (Platform.isAndroid) {
  doSmthAndroidSpecific();
}
```
## Hide status bar
```dart
import 'package:flutter/services.dart';

void main() {
    SystemChrome.setEnabledSystemUIOverlays([]);
}
```
## Lock orientation
```dart
import 'package:flutter/services.dart';

void main() async {
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  runApp(App());
}
```
## Show Alert
```dart
showDialog<void>(
  context: context,
  barrierDismissible: false,
  builder: (BuildContext context) {
    return AlertDialog(
      title: Text('Alert Title'),
      content: Text('My Alert Msg'),
      actions: <Widget>[
        FlatButton(
          child: Text('Ask me later'),
          onPressed: () {
            print('Ask me later pressed');
            Navigator.of(context).pop();
          },
        ),
        FlatButton(
          child: Text('Cancel'),
          onPressed: () {
            print('Cancel pressed');
            Navigator.of(context).pop();
          },
        ),
        FlatButton(
          child: Text('OK'),
          onPressed: () {
            print('OK pressed');
            Navigator.of(context).pop();
          },
        ),
      ],
    );
  },
);
```
## Arrays
```dart
final length = items.length;

final newItems = items..addAll(otherItems);

final allEven = items.every((item) => item % 2 == 0);

final filled = List<int>.filled(3, 42);

final even = items.where((n) => n % 2 == 0).toList();

final found = items.firstWhere((item) => item.id == 42);

final index = items.indexWhere((item) => item.id == 42);

final flat = items.expand((_) => _).toList();

final mapped = items.expand((item) => [item + 1]).toList();

items.forEach((item) => print(item));

items.asMap().forEach((index, item) => print('$item, $index'));

final includes = items.contains(42);

final indexOf = items.indexOf(42);

final joined = items.join(',');

final newItems = items.map((item) => item + 1).toList();

final item = items.removeLast();

items.add(42);

final reduced = items.fold({}, (acc, item) {
  acc[item.id] = item;
  return acc;
});

final reversed = items.reversed;

items.removeAt(0);

final slice = items.sublist(15, 42);

final hasOdd = items.any((item) => item % 2 == 0);

items.sort((a, b) => a - b);

items.replaceRange(15, 42, [1, 2, 3]);

items.insert(0, 42);
```
## Card layout
```dart
Widget build(BuildContext context) {
  return Card(
    // Set elevation value here
    elevation: 4.0,
    child: Container(
      color: Palette.White, // set card's color
      padding: EdgeInsets.symmetric(vertical: 8.0), // Set layout padding
      child: Row(
        children: <Widget>[
      Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            title, // Set the text value
            style: TextStyles.caption, //Set your custom style here
          ),
          Text(
            body, // Set the text value
            style: TextStyle(
              fontSize: 20.0,
              fontWeight: FontWeight.w500, // Set font weight
              color: Colors.black87, // Set text color
            ),
          ),
        ],
      ),
    ),
  ),
 ],
),
),
);
}
```
## Text field
```dart
class _MyHomePageState extends State {
  final _myController = TextEditingController();

  @override
  void dispose() {
    _myController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              decoration: InputDecoration(labelText: "Type something:"),
              controller: _myController,
            ),
            RaisedButton(
              child: Text("UPPERCASE"),
              onPressed: () =>
                  _myController.text = _myController.text.toUpperCase(),
            ),
          ],
        ),
      ),
    );
  }
}
```
## Slider

```dart
class _MyHomePageState extends State {
  double _sliderValue = 1.0;

  void _refreshSlider(double newValue) {
    setState(() {
      _sliderValue = newValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_sliderValue.toStringAsFixed(2)),
            Slider(
              value: _sliderValue,
              onChanged: _refreshSlider,
              min: 1.0,
              max: 10.0,
            )
          ],
        ),
      ),
    );
  }
}
```

## Radio Button
```dart
class _MyHomePageState extends State {
  int _radioValue;

  void _refreshRadio(int newValue) {
    setState(() {
      _radioValue = newValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_radioValue?.toString() ?? 'Select One'),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('0'),
                Radio(
                    value: 0,
                    groupValue: _radioValue,
                    onChanged: _refreshRadio,
                    ),
                Text('1'),
                Radio(
                    value: 1,
                    groupValue: _radioValue,
                    onChanged: _refreshRadio,
                    ),
                Text('2'),
                Radio(
                  value: 2,
                  groupValue: _radioValue,
                  onChanged: _refreshRadio,
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```
## List builder
```dart
List movieName = [
  "Casablanca",
  "Citizen Kane",
  "Lawrence of Arabia",
];

ListView.builder(
  itemCount: movieName.length,
  itemBuilder: (context, index) {
    return ListTile(
        title: Text(movieName[index]),
        onTap: () => _goToDetailPage(movieName[index]));
  },
)
```

## Animation
```dart
class MyHomePageState extends State
    with SingleTickerProviderStateMixin {
  Animation animation;
  AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 3), vsync: this);
    animation = Tween(begin: 100.0, end: 500.0).animate(controller)
      ..addListener(() {
        setState(() {});
      });
    controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Stack(
        children: [
          Positioned(
            left: 150.0,
            top: animation.value,
            child: Icon(
              Icons.music_note,
              size: 70.0,
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
```
## Responsive header
```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(context) => MaterialApp(
    home: HomePage()
  );
}


class HomePage extends StatelessWidget {
  @override
  Widget build(context) => Scaffold(
    appBar: AppBar(title: Text("test")),
    drawer: MediaQuery.of(context).size.width < 500 ? Drawer(
      child: Menu(),
    ) : null,
    body: SafeArea(
        child:Center(
          child: MediaQuery.of(context).size.width < 500 ? Content() :
          Row(
            children: [
              Container(
                width: 200.0,
                child: Menu()
              ),
              Container(
                width: MediaQuery.of(context).size.width-200.0,
                child: Content()
              )
            ]
          )
        )
    )
  );
}

class Menu extends StatelessWidget {
  @override
  Widget build(context) => ListView(
    children: [
      FlatButton(
        onPressed: () {},
          child: ListTile(
          leading: Icon(Icons.looks_one),
          title: Text("First Link"),
        )
      ),
      FlatButton(
        onPressed: () {},
          child: ListTile(
          leading: Icon(Icons.looks_two),
          title: Text("Second Link"),
        )
      )
    ]
  );
}

class Content extends StatelessWidget {
  final List<String> elements = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "A Million Billion Trillion", "A much, much longer text that will still fit"];
  @override
  Widget build(context) => GridView.builder(
    itemCount: elements.length,
    gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
      maxCrossAxisExtent: 130.0,
      crossAxisSpacing: 20.0,
      mainAxisSpacing: 20.0,
    ),
    itemBuilder: (context, i) => Card(
      child: Center(
        child: Padding(
          padding: EdgeInsets.all(8.0), child: Text(elements[i])
        )
      )
    )
  );
}
```
## Snackbar
```dart
import 'package:flutter/material.dart';

void main() => runApp(SnackBarDemo());

class SnackBarDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SnackBar Demo',
      home: Scaffold(
        appBar: AppBar(
          title: Text('SnackBar Demo'),
        ),
        body: SnackBarPage(),
      ),
    );
  }
}

class SnackBarPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () {
          final snackBar = SnackBar(
            content: Text('Yay! A SnackBar!'),
            action: SnackBarAction(
              label: 'Undo',
              onPressed: () {},
            ),
          );
          Scaffold.of(context).showSnackBar(snackBar);
        },
        child: Text('Show SnackBar'),
      ),
    );
  }
}
```