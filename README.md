# SMTP-API
Private SMTP API using NodeJS and Nodemailer module.
> Deploy on Serverless Service [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FsProDev%2Fsmtp-api)

#### Requirements
- [NodeJS (and npm)](https://nodejs.org/en/)
- [Vercel CLI](https://vercel.com/download)

#### References
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

### Query string & Request Body

> **All values of passed parameters (especially GET) must be uri encoded**
- **Existing parameters**
    - ```apikey```
    - ```from```
    - ```to```
    - ```subject```
    - ```text```
    - ```html```
    - ```filename```
    - ```fileurl```
- **Required parameters**
    - ```apikey```
    - ```from```
    - ```to```
    - ```subject```
    - ```text``` or ```html```

### Example of use (Direct link)

**1. Send email messages (plain text)**
> http:\/\/localhost:3000\/?apikey=```APIKEY```&from=```SENDER```&to=```RECEIVER```&subject=```SUBJECT```&text=```COMPLETE YOUR MESSAGE HERE```

**2. Send email messages (html content)**
> http:\/\/localhost:3000\/?apikey=```APIKEY```&from=```SENDER```&to=```RECEIVER```&subject=```SUBJECT```&html=```COMPLETE YOUR HTML MESSAGE HERE```

**3. Send email messages (with file attached)**
> http:\/\/localhost:3000\/?apikey=```APIKEY```&from=```SENDER```&to=```RECEIVER```&subject=```SUBJECT```&(text/html)=```COMPLETE YOUR MESSAGE HERE```&filename=```FILENAME (WITH EXTENSION)```&fileurl=```FILEURL```

## Support Me
### Global
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/sProDev)
### Indonesia
- [Trakteer](https://trakteer.id/sProDev)
- [Saweria](https://saweria.co/sProDev)
