<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>
<body>

<h2>Your Forget Password Link</h2>

<table>
    <tr>
        <th>One-Time Token</th>

        <th>Reset Password Link</th>
    </tr>
    <tr>
        <td>{{$data}}</td>
        <td><a href="http://localhost:3000/reset">Reset Link (Click Here)</a></td>
    </tr>

</table>

</body>
</html>
