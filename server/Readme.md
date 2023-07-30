# Flask Server - How to Run

This guide will walk you through the steps to run the Flask server with the provided `app.py` file. Flask is a lightweight web framework in Python, and this server responds to two endpoints: `/programming_languages` (GET) and `/handle_post` (POST).

## Prerequisites

- Python 3.x installed on your system.

## Installation

Before running the Flask server, you need to install Flask and Flask-Cors, which are required dependencies for this application.

1. **Install Flask and Flask-Cors**

   Open your terminal (or command prompt) and run the following commands to install Flask and Flask-Cors:

   ```bash
   pip install Flask
   pip install Flask-Cors
   ```

## Running the Server

Once you have installed the required dependencies, follow these steps to run the Flask server:

1. **Locate the `app.py` file**

   Ensure that you have the `app.py` file in your desired working directory.

2. **Open a terminal**

   Open a terminal (or command prompt) in the directory containing the `app.py` file.

3. **Start the Flask server**

   In the terminal, enter the following command:

   ```bash
   python app.py
   ```

   The Flask server will start running, and you should see output similar to:

   ```
    * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
   ```

4. **Access the server**

   Once the server is running, you can access it using your web browser or a tool like `curl` or `Postman`.

   - To view the login form, open your web browser and navigate to: `http://127.0.0.1:5000/`
   - To retrieve the list of programming languages, use a GET request to: `http://127.0.0.1:5000/programming_languages`
   - To handle a POST request, use a tool like `curl` or `Postman` and send a POST request to: `http://127.0.0.1:5000/handle_post`

5. **Interacting with the server**

   - When you visit `http://127.0.0.1:5000/`, you should see the login form.
   - Sending a GET request to `http://127.0.0.1:5000/programming_languages` will return a JSON response with the list of programming languages stored in the in-memory data store.
   - Sending a POST request to `http://127.0.0.1:5000/handle_post` will trigger the function and print the JSON data sent in the request.

## Stopping the Server

To stop the Flask server, press `CTRL+C` in the terminal where the server is running. This will terminate the server.

## Final Words

You now have the Flask server up and running, ready to handle GET and POST requests. This basic setup can be expanded upon to build more complex web applications or APIs using Flask.

For more information on Flask and its features, refer to the [Flask documentation](https://flask.palletsprojects.com/). Happy coding!
