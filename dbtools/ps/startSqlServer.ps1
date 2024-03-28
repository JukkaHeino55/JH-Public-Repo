#Set-ExecutionPolicy RemoteSigned
(Get-Service 'MSSQL$SQLEXPRESS').Start()
#Set-Service 'SQLEXPRESS' -StartupType Manual
#Start-Service -ServerInstance "MSSQL$LAPTOP-RAKNEPNH\SQLEXPRESS01"
#LAPTOP-RAKNEPNH\SQLEXPRESS01

#SQLAgent$SQLEXPRESS
