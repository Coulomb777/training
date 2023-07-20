import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'First App',
      theme: ThemeData.dark(),
      //home: const MyHomePage(title: 'First App'),
      routes: {
        '/': (context) => const HomePage(),
        '/files': (context) => const FilesPage(),
      },
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Files'),
      ),
      body: SafeArea(
        child: Center(
          child: TextButton(
            style: TextButton.styleFrom(
              backgroundColor: Colors.amber,
            ),
            onPressed: () {
              Navigator.pushNamed(context, '/files');
            },
            child: const Text(
              'Go to Files',
              style: TextStyle(color: Colors.black),
            ),
          ),
        ),
      ),
    );
  }
}

class FilesPage extends StatelessWidget {
  const FilesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Files'),
      ),
      body: const SafeArea(
        child: Center(
          child: Text("file!!"),
        ),
      ),
    );
  }
}
