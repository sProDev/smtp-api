# SMTP-API

Private SMTP API using NodeJS and [Nodemailer](https://nodemailer.com/) module.

> Deploy on Serverless Service [Vercel](https://vercel.com).

## Requirements

- [NodeJS (and npm)](https://nodejs.org/en/)
- [Vercel CLI](https://vercel.com/download) to deploy this

## References

- [Express Documentation](http://expressjs.com/en/starter/hello-world.html)
- [Nodemailer SMTP Transport](https://nodemailer.com/smtp/)

## Installation

1. Clone this repository
    ```
    git clone https://github.com/sooluh/smtp-api.git
    ```

2. Change the current working directory to this repository folder
    ```
    cd smtp-api
    ```

3. Install all modules listed as dependencies in package.json
    ```
    npm i --save
    ```

4. Rename the file `example.env` to `.env` and adjust any configuration as needed.<br>
   Enter anything in `APIKEY` as long as you remember it, and make sure no one knows your API Key
   
5. Run the server (locally)
    - Development mode
        ```
        npm run dev
        ```

    - Production mode
        ```
        npm run start
        ```

## Query String & Request Body

All values of passed parameters (especially GET) must be uri encoded

| Query/Body | Description                                           | Required?                   |
| ---------- | ----------------------------------------------------- | --------------------------- |
| `apikey`   | API key to allow clients to send email using your API | `Yes`                       |
| `from`     | Where did this email come from                        | `Yes`                       |
| `to`       | Where will this email be sent?                        | `Yes`                       |
| `subject`  | Subject for this email                                | `Yes`                       |
| `text`     | The content of this email (plain text)                | `Yes` if `html` is not used |
| `html`     | Content for this email (supports HTML)                | `Yes` if `text` is not used |
| `filename` | File name displayed (if there is a file attachment)   | `No`                        |
| `fileurl`  | The url of the file to attach                         | `No`                        |

## Example of Use

### Request

```curl
curl -XPOST -d 'apikey=verySecret098@&from=no-reply@example.com&to=sooluh@github.com&subject=Hello there!&text=Haha, this is just a test email, you don't need to reply to this email&filename=LICENSE&fileurl=https://raw.githubusercontent.com/sooluh/smtp-api/main/LICENSE' 'http://localhost:3000'
```

### Response

```json
{
    "success": true,
    "message": "success",
    "data": {
        "accepted": [
            "sooluh@github.com"
        ],
        "rejected": [],
        "envelopeTime": 1234,
        "messageTime": 4321,
        "messageSize": 321,
        "response": "250 OK id=1aBcd2-0001Ab-AB",
        "envelope": {
            "from": "no-reply@example.com",
            "to": [
                "sooluh@github.com"
            ]
        },
        "messageId": "<1234567a-1a23-a1b2-123a-123ab4cdefg5@example.com>"
    }
}
```

## Support Me

### Global

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/sooluh)

### Indonesia

- [Trakteer](https://trakteer.id/sooluh)
- [Saweria](https://saweria.co/sooluh)

## Additional Information

### License

Code licensed under [Apache 2.0 License](https://github.com/sooluh/smtp-api/blob/main/LICENSE).
