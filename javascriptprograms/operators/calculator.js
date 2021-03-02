<!DOCTYPE html>
<html lang="en">

<head>
    <script src="calcul.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Calclator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        
</head>
<body style="background-image:url('maths.jpeg');background-repeat: no-repeat;background-size: cover;">
    <div class="row">
        <div class="col-2">
            <h1><strong>Calculator</strong></h1>
        </div>
        <div class="col-4">

            <table style="margin-top: 150px;margin-left: auto;margin-right: auto;">
                <tr>
                    <td colspan="4"><input type="text" class="form-control" id="txtbox" name="" style="background-color:#fdffbd;">
                    </td>
                </tr>
                <tr>
                    <td><button class="btn btn-success" type="button" onclick="clearbox()">C</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('**')">m+</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('/')">+/</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display()">M </button></td>
                </tr>
                <tr>
                    <td><button class="btn btn-primary" type="button" onclick="display('7')">7</button></td>
                    <td><button class="btn btn-primary" type="button" onclick="display('8')">8</button></td>
                    <td><button class="btn btn-primary" type="button" onclick="display('9')">9</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('*')">*</button></td>
                </tr>
                <tr>
                    <td><button class="btn btn-primary" type="button" onclick="display('4')">4</button></td>
                    <td><button class="btn btn-primary" type="button" onclick="display('5')">5</button></td>
                    <td><button class="btn btn-primary" type="button" onclick="display('6')">6</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('-')">-</button></td>
                    
                </tr>
                <tr>
                    <td><button class="btn btn-primary" type="button" onclick="display('1')">1</button></td>
                    <td><button class="btn btn-primary" type="button" onclick="display('2')">2</button></td>
                    <td><button class="btn btn-primary" type="button" onclick="display('3')">3</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('+')">+</button></td>
                </tr>
                <tr>
                    <td><button class="btn btn-primary" type="button" onclick="display('0')">1</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('%')">%</button></td>
                    <td><button class="btn btn-success" type="button" onclick="display('.')">.</button></td>
                    <td><button class="btn btn-danger" type="button" onclick="solve()">=</button></td>
                </tr>
            </table>

        </div>
        <div class="col-6"></div>
    </div>


</body>

</html>