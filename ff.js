
  static async testMailConfig(config, from, subject, body, domain) {
    console.log('gote here');

    try {
      const message = {
        to: 'support@alphacx.co',
        from,
        subject: 'AlphaCX SMTP Server Test',
        html: 'This is a test',
      };
      console.log(message);

      if (config.type === 'smtp') {
        const password = config.password;
        config.secure = config.tls;
        config.port = config?.port || 465;
        config.auth = {
          user: config?.user || config.email,
          pass: password,
        };
        const transporter = await this.createTransport(config);
        const resTrans = await transporter.sendMail(message);
        console.log(':::::::', resTrans);
        if (resTrans) {
          return {
            status: true,
          };
        } else {
          return {
            status: false,
          };
        }
      } else {
        (message.from = config?.user || config.email),
          sgMail.setApiKey(config.apiKey);
        // sgMail.send(message);
        return sgMail.send(message, (error, result) => {
          if (error) {
            //Do something with the error
            console.log(error);
            console.log(error.response.body.errors);
            return {
              status: false,
            };
          } else {
            //Celebrate
            console.log('success');
            return {
              status: true,
            };
          }
        });
      }
    } catch (error) {
      console.log('>>', error);
      return {
        status: false,
        message: error,
      };
    }
  }