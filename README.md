# SMTP-API
Private SMTP API using NodeJS and Nodemailer module.
> Deploy on Serverless Service [Vercel](https://vercel.com).

### Requirements
- [NodeJS (and npm)](https://nodejs.org/en/)
- [Vercel CLI](https://vercel.com/download)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/about/)

### References
- [Express Documentation](http://expressjs.com/en/starter/hello-world.html)
- [Nodemailer SMTP Transport](https://nodemailer.com/smtp/)

### How to Install
1. Clone this repository
    ```
    git clone https://github.com/sProDev/smtp-api.git
    ```
2. Change the current working directory to this repository folder
    ```
    cd smtp-api
    ```
3. Install all modules listed as dependencies in package.json
    ```
    npm install
    ```
4. Rename ```example.env``` to an ```.env``` file then adjust it to your SMTP server configuration, don't forget to also go to the APIKEY section (it's up to you, make sure it's confidential).
5. Run the server (locally)
    
    - Development mode
        ```
        npm run dev
        ```
    - Production mode
        ```
        npm run start
        ```

### Query string

> All values entered into the query string must be uri encoded
- **Existing query string**
    - ```apikey```
    - ```from```
    - ```to```
    - ```subject```
    - ```text```
    - ```html```
    - ```filename```
    - ```fileurl```
- **Required query string**
    - ```apikey```
    - ```from```
    - ```to```
    - ```subject```
    - ```text``` or ```html```

### Example of use

**1. Send email messages (plain text)**

http:\/\/localhost:3000\/?apikey=```APIKEY```&from=```SENDER```&to=```RECEIVER```&subject=```SUBJECT```&text=```COMPLETE YOUR MESSAGE HERE```

Example:
> http:\/\/localhost:3000\/?apikey=mYkEy123&from=no-reply<span>%40anjay</span>.com&to=customer<span>%40example</span>.com&subject=Verify%20Your%20Email&text=Congratulations%21%20You%20have%20registered%20with%20our%20service.%0A%0APreviously%2C%20please%20first%20verify%20your%20email%20address%20with%20the%20following%20link%3A%0Ahttp%3A%2F%2Fverif.anjay.com%2F%3Fcustomer%40example.com
