$a = (Get-Service 'MSSQL$SQLEXPRESS01')
$a
$a.Stop()