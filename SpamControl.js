let spamming = false;
let spamChannel = undefined;

function spam() {
    return new Promise((resolve, reject) => {


        if (!spamChannel)
            reject('Channel is undefined!');


        spamChannel.send("spam")
        .then(msg => {

            setTimeout(() => {
            
                if (spamming) {
                    spam()
                    .then(resolve)
                    .catch(console.log);
                }


                else {
                    resolve();
                }
            }, 100)
        })
        .catch(console.log);

    });
}

module.exports = {
    setChannel: function(channel) {
        spamChannel = channel;
    },
    setStatus: function (statusFlag) {
        let currentStatus = spamming;
        spamming = statusFlag;

        if (statusFlag && currentStatus != statusFlag) {
            spam();
        }
    },
    getStatus: function() {
        return spamming;
    }
};