$('#form_names').on('input', function() {
    console.log("names")
    $('#names').text(this.value)
  })
$('#form_company').on('input', function() {
    console.log("names")
    $('#company').text(this.value)
  })
$('#form_designation').on('input', function() {
    console.log("names")
    $('#designation').text(this.value)
  })
$('#form_department').on('input', function() {
    console.log("names")
    $('#department').text(this.value)
  })
$('#form_phone').on('input', function() {
    console.log("names")
    $('#phone').text(this.value)
  })
$('#form_email').on('input', function() {
    console.log("names")
    $('#email').text(this.value)
  })
$('#form_website').on('input', function() {
    console.log("names")
    $('#website').text(this.value)
  })

var copyEmailBtn = document.querySelector('.js-emailcopybtn');  
copyEmailBtn.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  var emailLink = document.querySelector('.js-emaillink');  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  
    
  try {  
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Remove the selections - NOTE: Should use   
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});



var samplecopy = document.querySelector('.samplecopybtn');  
samplecopy.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  var emailLink = document.querySelector('.sample');  
  window.getSelection().removeAllRanges();  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  
    
  try {  
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Remove the selections - NOTE: Should use   
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});


new ClipboardJS('.copy', {
    text: function() {
        // based on your fiddle, you may need to replace this selector, too.
        var htmlBlock = document.querySelector('.sample2');
        return htmlBlock;
    }
});

function oneworld() {
  var bigdiv = document.getElementById("sample2")
  bigdiv.innerHTML = `<div id="signature-preview" class="o-signature-preview sample" style=""><div> <div> <table cellspacing="0" width="500" cellpadding="0" border="0"> <tr> <td valign="middle" width="133" style="padding: 0px 15px 0px 0px; vertical-align: middle;"><img alt="created with MySignature.io" width="133" style="width:133px;max-width:133px;moz-border-radius:30%;khtml-border-radius:30%;o-border-radius:30%;webkit-border-radius:30%;ms-border-radius:30%;border-radius:30%;" src="https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200"> </td><td valign="middle" width="37" style="vertical-align: middle; padding: 0px 0px 0px 0px; font-family: Arial;"> <table cellspacing="0" cellpadding="0" border="0" style="line-height: 1;"> <tbody> <tr> <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank" class="social_link facebook" href="#" style="display: block;border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck" style="background-color: #ff7f00; max-width: 135px; display: block;"></a></td></tr><tr> <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank" class="social_link twitter" href="#" style="display: block;border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck" style="background-color: #ff7f00; max-width: 135px; display: block;"></a></td></tr><tr> <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank" class="social_link linkedin" href="#" style="display: block;border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck" style="background-color: #ff7f00; max-width: 135px; display: block;"></a></td></tr></tbody> </table> </td><td valign="middle" style="margin: 0.1px; font-size: 1em; vertical-align: middle;"> <table cellspacing="0" cellpadding="0" border="0" style="width: 100%; max-width: 400px; line-height: 1.6; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; font-size: 90%; color: rgb(0, 0, 1);"> <tr> <td style="margin: 0.1px; padding-bottom: 1px; font: 600 1.2em &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(133, 68, 22);" id="names"> Dwight Schrute </td></tr><tr> <td style="margin: 0.1px; padding-bottom: 5px; display: block;"> <div style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;" id="designation"> Assistant Regional Manager at <span style="font-weight:bolder" id="company">Dunder Mifflin</span> </div></td></tr><tr> <td style="margin: 0.1px; padding: 1px 0px;"> <div style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;"> <a href="tel:+1 234 567 890" style="text-decoration: none; color: rgb(0, 0, 1);" id="phone">+1 234 567 890</a> , <a href="tel:+254 712 345 678" style="text-decoration: none; color: rgb(0, 0, 1);">+254 712 345 678</a> </div></td></tr><tr> <td style="margin: 0.1px; padding: 1px 0px;"> <div style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;"> <a href="mailto:dwight@dundermifflin.com" target="_blank" style="text-decoration: none; color: rgb(0, 0, 1);" id="email">dwight@dundermifflin.com</a> </div></td></tr><tr> <td style="margin: 0.1px; padding: 1px 0px;"> <div style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;"> <a href="http://www.dundermifflin.com" style="text-decoration: none;color:#000001;text-decoration: none;" target="_blank" id="website">www.dundermifflin.com</a></div></td></tr></table> </td></tr></table> <table width="500" cellspacing="0" cellpadding="0" border="0"> <tr style="font-size: 1px;"> <td colspan="2" class="s_pixel"><a href="https://mysignature.io/editor/?utm_source=freepixel" style=""><img src="https://img.mysignature.io/pixel/null/signature/"></a></td></tr></table> </div><table cellspacing="0" cellpadding="0" border="0" fragment="11ccb2b9cdc" style="width: 500px; color: gray; font-family: Arial; line-height: 1; font-size: 12px;"> <tr> <td style="padding-top: 5px; margin: 0.1px;"> </td></tr></table> <table cellspacing="0" cellpadding="0" border="0" fragment="11ccb2b9cdc" style="margin-top: 15px; width: 500px; color: gray; font-family: Arial; font-size: 75%;"> <tr> <td style="margin: 0.1px; width: 30px;"> </td><td style="margin: 0.1px;">Please consider the environment before printing this email</td></tr></table> <table fragment="11ccb2b9cdc"> <tr> <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td></tr></table> </div></div>`
  
  
  console.log(bigdiv.innerHTML)
}




let three = `<div data-v-2580504d="" class="preview-pane-content preview__content sample three" style="width: 600px;" id="three">
<table style="direction: ltr; border-radius: 0; moz-border-radius: 0; khtml-border-radius: 0; o-border-radius: 0; webkit-border-radius: 0; ms-border-radius: 0;" class="main_html">
    <tbody>
        <tr>
            <td>
                <table cellpadding="0" cellspacing="0" class="ws-tpl" style="font-family: Arial; line-height: 1.15; color: #000;">
                    <tbody>
                        <tr>
                            <td style="vertical-align: top; padding-right: 14px;">
                                <table cellpadding="0" cellspacing="0" class="ws-tpl-photo" style="width: 94px;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img
                                                    src="https://d36urhup7zbd7q.cloudfront.net/07018871-3bf0-473c-97fe-022fe1555691/dwight500x500.format_png.resize_200x.png#logo"
                                                    height="94"
                                                    width="94"
                                                    style="
                                                        width: 94px;
                                                        vertical-align: initial;
                                                        border-radius: 50%;
                                                        moz-border-radius: 50%;
                                                        khtml-border-radius: 50%;
                                                        o-border-radius: 50%;
                                                        webkit-border-radius: 50%;
                                                        ms-border-radius: 50%;
                                                        display: block;
                                                        height: 94px;
                                                    "
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="ws-tpl-separator" height="1" width="0" style="width: 0px; border-right-width: 2px; border-right-style: solid; border-right-color: #bdbdbd; height: 1px; font-size: 1pt;">&nbsp;</td>
                            <td style="padding-left: 14px; vertical-align: top;" valign="top">
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td style="line-height: 1.2; padding-bottom: 12px;">
                                                <span class="ws-tpl-name" style="font-family: Arial; text-transform: initial; font-weight: bold;">
                                                    <span style="color: #646464; font-size: 15.600000000000001px;" data-acs="name" id="names"> Dwight Schrute </span>
                                                </span>
                                                <br />
                                                <span class="ws-tpl-title" style="font-size: 13.200000000000001px; letter-spacing: 0px; font-family: Arial; text-transform: initial; font-weight: bold; color: #646464;" data-acs="title" id="designation">
                                                    Assistant Regional Manager
                                                </span>,
                                                <span
                                                    class="ws-tpl-company"
                                                    style="font-size: 13.200000000000001px; letter-spacing: 0px; font-family: Arial; text-transform: initial; font-weight: bold; color: #646464;"
                                                    data-acs="company"
                                                    id="company"
                                                >
                                                    DUNDER MIFFLIN
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="line-height: 0;">
                                                <table cellpadding="0" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <table cellpadding="0" cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="line-height: 0%; padding-bottom: 6px;">
                                                                                <table class="ws-tpl-phone" cellpadding="0" cellspacing="0" style="line-height: 14px; font-size: 12px; font-family: Arial;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="font-family: Arial; font-weight: bold; font-size: 12px; color: #45668e;">
                                                                                                <img src="https://cdn.gifo.wisestamp.com/social/phone/45668E/13/trans.png" style="vertical-align: -2px; line-height: 1.2;" />
                                                                                            </td>
                                                                                            <td style="width: 5px; font-size: 1pt; line-height: 0;" width="5">&nbsp;</td>
                                                                                            <td style="font-family: Arial; font-size: 12px;">
                                                                                                <a href="tel:+254 712 345 678" target="_blank" style="text-decoration: none; font-size: 12px; font-family: Arial;">
                                                                                                    <span id="phone" data-acs="phone" style="line-height: 1.2; color: #212121; font-family: Arial; white-space: nowrap; font-size: 12px;">
                                                                                                        +254 712 345 678
                                                                                                    </span>
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                            <td style="line-height: 0%; padding-bottom: 6px;">
                                                                                <table class="ws-tpl-email" cellpadding="0" cellspacing="0" style="line-height: 14px; font-size: 12px; font-family: Arial;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="padding: 0 6px;">
                                                                                                <span style="font-family: Arial; font-weight: bold; font-size: 12px; color: #212121; vertical-align: 2px;"> | </span>
                                                                                            </td>
                                                                                            <td style="font-family: Arial; font-weight: bold; font-size: 12px; color: #45668e;">
                                                                                                <img src="https://cdn.gifo.wisestamp.com/social/envelope/45668E/13/trans.png" style="vertical-align: -2px; line-height: 1.2;" />
                                                                                            </td>
                                                                                            <td style="width: 5px; font-size: 1pt; line-height: 0;" width="5">&nbsp;</td>
                                                                                            <td style="font-family: Arial; font-size: 12px;">
                                                                                                <a href="mailto:dschrute@dundermifflin.com" target="_blank" style="text-decoration: none; font-size: 12px; font-family: Arial;">
                                                                                                    <span id="email" data-acs="email" style="line-height: 1.2; color: #212121; font-family: Arial; white-space: nowrap; font-size: 12px;">
                                                                                                        dschrute@dundermifflin.com
                                                                                                    </span>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td style="font-family: Arial; font-size: 12px;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table cellpadding="0" cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="line-height: 0%; padding-bottom: 6px;">
                                                                                <table class="ws-tpl-website" cellpadding="0" cellspacing="0" style="line-height: 14px; font-size: 12px; font-family: Arial;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="font-family: Arial; font-weight: bold; font-size: 12px; color: #45668e;">
                                                                                                <img src="https://cdn.gifo.wisestamp.com/social/browser/45668E/13/trans.png" style="vertical-align: -2px; line-height: 1.2;" />
                                                                                            </td>
                                                                                            <td style="width: 5px; font-size: 1pt; line-height: 0;" width="5">&nbsp;</td>
                                                                                            <td style="font-family: Arial; font-size: 12px;">
                                                                                                <a href="http://dundermifflin.com" target="_blank" style="text-decoration: none; font-size: 12px; font-family: Arial;">
                                                                                                    <span id="website" data-acs="website" style="line-height: 1.2; color: #212121; font-family: Arial; white-space: nowrap; font-size: 12px;">
                                                                                                        dundermifflin.com
                                                                                                    </span>
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table style="opacity: 0 !important;">
    <tbody>
        <tr>
            <td style="height: 1px !important; width: 1px !important;" height="1" width="1">.</td>
        </tr>
    </tbody>
</table>
</div>`
let two = `            <div id="two" class="o-signature-preview sample two tab-pane">
<div>
    <div>
        <table cellspacing="0" width="500" cellpadding="0" border="0">
            <tr>
                <td valign="middle" width="133" style="padding: 0px 15px 0px 0px; vertical-align: middle;"><img
                        alt="created with MySignature.io" width="133"
                        style="width:133px;max-width:133px;moz-border-radius:30%;khtml-border-radius:30%;o-border-radius:30%;webkit-border-radius:30%;ms-border-radius:30%;border-radius:30%;"
                        src="https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200">
                </td>
                <td valign="middle" width="37"
                    style="vertical-align: middle; padding: 0px 0px 0px 0px; font-family: Arial;">
                    <table cellspacing="0" cellpadding="0" border="0" style="line-height: 1;">
                        <tbody>
                            <tr>
                                <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank"
                                        class="social_link  facebook" href="#"
                                        style="display: block;border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                        alt="facebook" color="#6A78D1" height="24"
                                        class="sc-bRBYWo ccSRck"
                                        style="background-color: #ff7f00; max-width: 135px; display: block;"></a></td>
                            </tr>
                            <tr>
                                <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank"
                                        class="social_link  twitter" href="#"
                                        style="display: block;border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                        alt="twitter" color="#6A78D1" height="24"
                                        class="sc-bRBYWo ccSRck"
                                        style="background-color: #ff7f00; max-width: 135px; display: block;"></a></td>
                            </tr>
                            <tr>
                                <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank"
                                        class="social_link  linkedin" href="#"
                                        style="display: block;border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                        alt="linkedin" color="#6A78D1" height="24"
                                        class="sc-bRBYWo ccSRck"
                                        style="background-color: #ff7f00; max-width: 135px; display: block;"></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td valign="middle" style="margin: 0.1px; font-size: 1em; vertical-align: middle;">
                    <table cellspacing="0" cellpadding="0" border="0"
                        style="width: 100%; max-width: 400px; line-height: 1.6; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; font-size: 90%; color: rgb(0, 0, 1);">
                        <tr>
                            <td
                                style="margin: 0.1px; padding-bottom: 1px; font: 600 1.2em &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(133, 68, 22);" id="names">
                                Dwight Schrute
                            </td>
                        </tr>
                        <tr>
                            <td style="margin: 0.1px; padding-bottom: 5px; display: block;">
                                <div
                                    style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                    <span id="designation">Assistant Regional Manager</span>
                                    at
                                    <span style="font-weight:bolder" id="company">Dunder Mifflin</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="margin: 0.1px; padding: 1px 0px;">
                                <div
                                    style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                    <a href="tel:+1 234 567 890"
                                        style="text-decoration: none; color: rgb(0, 0, 1);" id="phone">+1 234 567 890</a> , <a
                                        href="tel:+254 712 345 678"
                                        style="text-decoration: none; color: rgb(0, 0, 1);">+254 712 345 678</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="margin: 0.1px; padding: 1px 0px;">
                                <div
                                    style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                    <a href="mailto:dwight@dundermifflin.com" target="_blank"
                                        style="text-decoration: none; color: rgb(0, 0, 1);" id="email">dwight@dundermifflin.com</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="margin: 0.1px; padding: 1px 0px;">
                                <div
                                    style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                    <a href="http://www.dundermifflin.com"
                                        style="text-decoration: none;color:#000001;text-decoration: none;"
                                        target="_blank" id="website">www.dundermifflin.com</a></div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</div>
</div>`
let one = `            <table cellpadding="0" id="one" cellspacing="0" class="sc-gPEVay eQYmiW sample one tab-pane"
style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
<tbody>
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                <tbody>
                    <tr>
                        <td width="150" style="vertical-align: middle;"><span class="sc-kgAjT cuzzPp"
                                style="margin-right: 20px; display: block;"><img
                                    src="https://d36urhup7zbd7q.cloudfront.net/07018871-3bf0-473c-97fe-022fe1555691/dwight500x500.format_png.resize_200x.png#logo"
                                    role="presentation" width="130" class="sc-cHGsZl bHiaRe"
                                    style="max-width: 130px;border-radius: 50%;"></span></td>
                        <td style="vertical-align: middle;">
                            <h3 color="#000000" id="names"
                                style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);">Josh Smith</h3>
                            <p color="#000000" font-size="medium" class="sc-fMiknA bxZCMx"
                                style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                                <span id="designation">Chief Technology Officer</span></p>
                            <p color="#000000" font-size="medium" class="sc-dVhcbM fghLuF"
                                style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                                <span id="department">Information Technology</span><span>&nbsp;|&nbsp;</span><span id="company">StepWise</span>
                            </p>
                        </td>
                        <td width="30">
                            <div style="width: 30px;"></div>
                        </td>
                        <td color="#ff7f00" direction="vertical" width="1" class="sc-jhAzac hmXDXQ"
                            style="width: 1px; border-bottom: none; border-left: 1px solid rgb(255, 127, 0);"></td>
                        <td width="30">
                            <div style="width: 30px;"></div>
                        </td>
                        <td style="vertical-align: middle;">
                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                <tbody>
                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                <tbody>
                                                    <tr>
                                                        <td style="vertical-align: bottom;"><span color="#ff7f00"
                                                                width="11" class="sc-jlyJG bbyJzT"
                                                                style="display: block; background-color: rgb(255, 127, 0);"><img
                                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                                    color="#ff7f00" width="13"
                                                                    class="sc-iRbamj blSEcj"
                                                                    style="display: block; background-color: rgb(255, 127, 0);"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style="padding: 0px; color: rgb(0, 0, 0);"><a
                                                href="tel:+254 712 456 789" color="#000000" class="sc-gipzik iyhjGb"
                                                style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span id="phone">+254
                                                    712 456 789</span></a></td>
                                    </tr>
                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                <tbody>
                                                    <tr>
                                                        <td style="vertical-align: bottom;"><span color="#ff7f00"
                                                                width="11" class="sc-jlyJG bbyJzT"
                                                                style="display: block; background-color: rgb(255, 127, 0);"><img
                                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                                    color="#ff7f00" width="13"
                                                                    class="sc-iRbamj blSEcj"
                                                                    style="display: block; background-color: rgb(255, 127, 0);"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style="padding: 0px;"><a href="mailto:josh@stepwise.net" color="#000000"
                                                class="sc-gipzik iyhjGb"
                                                style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span id="email">josh@stepwise.net</span></a>
                                        </td>
                                    </tr>
                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                <tbody>
                                                    <tr>
                                                        <td style="vertical-align: bottom;"><span color="#ff7f00"
                                                                width="11" class="sc-jlyJG bbyJzT"
                                                                style="display: block; background-color: rgb(255, 127, 0);"><img
                                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                                    color="#ff7f00" width="13"
                                                                    class="sc-iRbamj blSEcj"
                                                                    style="display: block; background-color: rgb(255, 127, 0);"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style="padding: 0px;"><a href="//www.stepwise.net" color="#000000"
                                                class="sc-gipzik iyhjGb"
                                                style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span id="website">www.stepwise.net</span></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;">
                <tbody>
                    <tr>
                        <td height="30"></td>
                    </tr>
                    <tr>
                        <td color="#ff7f00" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ"
                            style="width: 100%; border-bottom: 1px solid rgb(255, 127, 0); border-left: none; display: block;">
                        </td>
                    </tr>
                    <tr>
                        <td height="30"></td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;">
                <tbody>
                    <tr>
                        <td style="vertical-align: top;"><img
                                src="https://drive.google.com/uc?id=1HJIOSoLSWunM_LRnxaV6rL5Bfj3tRutz"
                                role="presentation" width="130" class="sc-cHGsZl bHiaRe"
                                style="max-width: 130px; display: inline-block;"></td>
                        <td style="text-align: right; vertical-align: top;">
                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; display: inline-block;">
                                <tbody>
                                    <tr style="text-align: right;">
                                        <td><a href="https://www.facebook.com/joshsmith" color="#6A78D1"
                                                class="sc-hzDkRC kpsoyz"
                                                style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                    alt="facebook" color="#6A78D1" height="24"
                                                    class="sc-bRBYWo ccSRck"
                                                    style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a>
                                        </td>
                                        <td width="5">
                                            <div></div>
                                        </td>
                                        <td><a href="https://www.twitter.com/joshsmith" color="#6A78D1"
                                                class="sc-hzDkRC kpsoyz"
                                                style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                    alt="twitter" color="#6A78D1" height="24"
                                                    class="sc-bRBYWo ccSRck"
                                                    style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a>
                                        </td>
                                        <td width="5">
                                            <div></div>
                                        </td>
                                        <td><a href="https://www.linkedin.com/josh-smith" color="#6A78D1"
                                                class="sc-hzDkRC kpsoyz"
                                                style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                    alt="linkedin" color="#6A78D1" height="24"
                                                    class="sc-bRBYWo ccSRck"
                                                    style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a>
                                        </td>
                                        <td width="5">
                                            <div></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>`