#!/usr/bin/env python3
"""
Simple HTTP Server for Subdivision Mapper
Run this to serve the HTML application locally
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow local file access
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    print(f"Starting Subdivision Mapper Server...")
    print(f"Server directory: {script_dir}")
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            server_url = f"http://localhost:{PORT}"
            print(f"Server running at: {server_url}")
            print(f"Opening in browser...")
            print(f"Press Ctrl+C to stop the server")
            
            # Open browser automatically
            webbrowser.open(server_url)
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nServer stopped by user")
    except OSError as e:
        if e.errno == 10048:  # Port already in use
            print(f"Port {PORT} is already in use. Trying port {PORT + 1}")
            PORT = PORT + 1
            main()
        else:
            print(f"Error starting server: {e}")
            sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
