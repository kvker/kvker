---
layout: note
title: mysql错误码与解释表
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

[转自](https://blog.csdn.net/qq_15071263/article/details/78034544)

错误码和解释

错误：1000SQLSTATE： （） HY000 ER_HASHCHK

消息：hashchk

错误：1001SQLSTATE： （） HY000 ER_NISAMCHK

消息：isamchk

错误：1002SQLSTATE： （） HY000 ER_NO

消息：NO

用于构建其他消息。

错误：1003SQLSTATE： （） HY000 ER_YES

消息：是的

用于构建其他消息。

扩展EXPLAIN格式生成备注消息。在后续输出中用于这些消息ER_YES的Code列SHOW WARNINGS。

错误：1004SQLSTATE： （） HY000 ER_CANT_CREATE_FILE

消息：无法创建文件’％s’（errno：％d - ％s）

发生无法创建或复制某些操作所需的文件。

可能原因：源文件的权限问题; 目标文件已存在但不可写。

错误：1005SQLSTATE： （） HY000 ER_CANT_CREATE_TABLE

消息：无法创建表’％s’（errno：％d）

InnoDB在无法创建表时报告此错误。如果错误消息指的是错误150，则表创建失败，因为 外键约束未正确形成。如果错误消息指的是错误-1，则表创建可能会失败，因为该表包含与内部InnoDB表的名称相匹配的列名称。

错误：1006SQLSTATE： （） HY000 ER_CANT_CREATE_DB

消息：无法创建数据库’％s’（errno：％d）

错误：1007SQLSTATE： （） HY000 ER_DB_CREATE_EXISTS

消息：无法创建数据库’％s’; 数据库存在

尝试创建数据库失败，因为数据库已经存在。

如果您真的要替换现有数据库，请先删除数据库，或者如果在不使该语句产生错误的情况下保留现有数据库，则将语句添加IF NOT EXISTS到 CREATE DATABASE语句中。

错误：1008SQLSTATE： （） HY000 ER_DB_DROP_EXISTS

消息：无法删除数据库’％s’; 数据库不存在

错误：1009SQLSTATE： （） HY000 ER_DB_DROP_DELETE

消息：丢弃数据库时出错（不能删除’％s’，errno：％d）

错误：1010SQLSTATE： （） HY000 ER_DB_DROP_RMDIR

消息：数据库丢失（不能rmdir’％s’，errno：％d）

错误：1011SQLSTATE： （） HY000 ER_CANT_DELETE_FILE

消息：删除’％s’时出错（errno：％d - ％s）

错误：1012SQLSTATE： （） HY000 ER_CANT_FIND_SYSTEM_REC

消息：无法在系统表中读取记录

返回InnoDB为尝试访问 InnoDB INFORMATION_SCHEMA 表时InnoDB不可用。

错误：1013SQLSTATE： （） HY000 ER_CANT_GET_STAT

消息：无法获取“％s”的状态（errno：％d - ％s）

错误：1014SQLSTATE： （） HY000 ER_CANT_GET_WD

消息：无法获取工作目录（errno：％d - ％s）

错误：1015SQLSTATE： （） HY000 ER_CANT_LOCK

消息：无法锁定文件（errno：％d - ％s）

错误：1016SQLSTATE： （） HY000 ER_CANT_OPEN_FILE

消息：无法打开文件：’％s’（errno：％d - ％s）

InnoDB当InnoDB 数据文件的表无法找到时，即使.frm表的文件存在，也会 报告此错误。请参见 第14.21.3节“InnoDB数据字典操作疑难解答”。

错误：1017SQLSTATE： （） HY000 ER_FILE_NOT_FOUND

消息：找不到文件：’％s’（errno：％d - ％s）

错误：1018SQLSTATE： （） HY000 ER_CANT_READ_DIR

消息：无法读取’％s’的目录（errno：％d - ％s）

错误：1019SQLSTATE： （） HY000 ER_CANT_SET_WD

消息：无法将目录更改为’％s’（errno：％d - ％s）

错误：1020SQLSTATE： （） HY000 ER_CHECKREAD

消息：自上次读取表’％s’以来，记录已更改

错误：1021SQLSTATE： （） HY000 ER_DISK_FULL

消息：磁盘已满（％s）; 等待某人释放一些空间…（errno：％d - ％s）

错误：1022SQLSTATE： （） 23000 ER_DUP_KEY

消息：不能写; 表’％s’中的重复键

错误：1023SQLSTATE： （） HY000 ER_ERROR_ON_CLOSE

消息：错误在’％s’（errno：％d - ％s）

错误：1024SQLSTATE： （） HY000 ER_ERROR_ON_READ

消息：读取文件’％s’时出错（errno：％d - ％s）

错误：1025SQLSTATE： （） HY000 ER_ERROR_ON_RENAME

消息：将’％s’重命名为’％s’时出错（errno：％d - ％s）

错误：1026SQLSTATE： （） HY000 ER_ERROR_ON_WRITE

消息：写入文件’％s’时出错（errno：％d - ％s）

错误：1027SQLSTATE： （） HY000 ER_FILE_USED

消息：’％s’被锁定以防止变更

错误：1028SQLSTATE： （） HY000 ER_FILSORT_ABORT

消息：排序中止

错误：1029SQLSTATE： （） HY000 ER_FORM_NOT_FOUND

消息：查看’％s’不存在’％s’

错误：1030SQLSTATE： （） HY000 ER_GET_ERRNO

消息：存储引擎收到错误％d

检查%d值以查看操作系统错误是什么意思。 例如，28表示磁盘空间已用尽。

错误：1031SQLSTATE： （） HY000 ER_ILLEGAL_HA

消息：’％s’的表存储引擎没有此选项

错误：1032SQLSTATE： （） HY000 ER_KEY_NOT_FOUND

消息：在’％s’中找不到记录

错误：1033SQLSTATE： （） HY000 ER_NOT_FORM_FILE

消息：文件中的信息不正确：’％s’

错误：1034SQLSTATE： （） HY000 ER_NOT_KEYFILE

消息：表’％s’的密钥文件不正确; 尝试修复它

错误：1035SQLSTATE： （） HY000 ER_OLD_KEYFILE

消息：表’％s’的旧密钥文件; 修好吧！

错误：1036SQLSTATE： （） HY000 ER_OPEN_AS_READONLY

消息：表’％s’是只读的

错误：1037SQLSTATE： （） HY001 ER_OUTOFMEMORY

消息：内存不足 重新启动服务器并重试（需要％d字节）

错误：1038SQLSTATE： （） HY001 ER_OUT_OF_SORTMEMORY

消息：排序内存中，考虑增加服务器排序缓冲区大小

错误：1039SQLSTATE： （） HY000 ER_UNEXPECTED_EOF

消息：读取文件’％s’时发现意外的EOF（errno：％d - ％s）

错误：1040SQLSTATE： （） 08004 ER_CON_COUNT_ERROR

消息：连接太多

错误：1041SQLSTATE： （） HY000 ER_OUT_OF_RESOURCES

消息：内存不足 检查mysqld或其他进程是否使用所有可用的内存; 如果没有，您可能需要使用’ulimit’来允许mysqld使用更多内存，或者可以添加更多的交换空间

错误：1042SQLSTATE： （） 08S01 ER_BAD_HOST_ERROR

消息：无法获取您的地址的主机名

错误：1043SQLSTATE： （） 08S01 ER_HANDSHAKE_ERROR

消息：握手不良

错误：1044SQLSTATE： （） 42000 ER_DBACCESS_DENIED_ERROR

消息：访问被拒绝用户’％s’@’％s’到数据库’％s’

错误：1045SQLSTATE： （） 28000 ER_ACCESS_DENIED_ERROR

消息：访问被拒绝用户’％s’@’％s’（使用密码：％s）

错误：1046SQLSTATE： （） 3D000 ER_NO_DB_ERROR

消息：未选择数据库

错误：1047SQLSTATE： （） 08S01 ER_UNKNOWN_COM_ERROR

消息：未知命令

错误：1048SQLSTATE： （） 23000 ER_BAD_NULL_ERROR

消息：列’％s’不能为空

错误：1049SQLSTATE： （） 42000 ER_BAD_DB_ERROR

消息：未知数据库’％s’

错误：1050SQLSTATE： （） 42S01 ER_TABLE_EXISTS_ERROR

消息：表’％s’已经存在

错误：1051SQLSTATE： （） 42S02 ER_BAD_TABLE_ERROR

消息：未知表’％s’

错误：1052SQLSTATE： （） 23000 ER_NON_UNIQ_ERROR

消息：％s中的列’％s’是不明确的

%s = column name
%s = location of column (for example, "field list")
1
2
可能的原因：一个列出现在查询中而没有适当的限定条件，例如在选择列表或ON子句中。

// 例如
mysql> SELECT i FROM t INNER JOIN t AS t2;
ERROR 1052 (23000): Column 'i' in field list is ambiguous

mysql> SELECT * FROM t LEFT JOIN t AS t2 ON i = i;
ERROR 1052 (23000): Column 'i' in on clause is ambiguous

// 使用适当的表名限定列：
mysql> SELECT t2.i FROM t INNER JOIN t AS t2;
// 修改查询以避免资格的需要：
mysql> SELECT * FROM t LEFT JOIN t AS t2 USING (i);
1
2
3
4
5
6
7
8
9
10
11
错误：1053SQLSTATE： （） 08S01 ER_SERVER_SHUTDOWN

消息：服务器关机正在进行中

错误：1054SQLSTATE： （） 42S22 ER_BAD_FIELD_ERROR

消息：’％s’中的未知列’％s’

错误：1055SQLSTATE： （） 42000 ER_WRONG_FIELD_WITH_GROUP

消息：’％s’不在GROUP BY中

错误：1056SQLSTATE： （） 42000 ER_WRONG_GROUP_FIELD

讯息：无法对“％s”进行分组

错误：1057SQLSTATE： （） 42000 ER_WRONG_SUM_SELECT

消息：语句在同一语句中具有和函数和列

错误：1058SQLSTATE： （） 21S01 ER_WRONG_VALUE_COUNT

消息：列计数与值计数不匹配

错误：1059SQLSTATE： （） 42000 ER_TOO_LONG_IDENT

消息：标识符名称’％s’太长

错误：1060SQLSTATE： （） 42S21 ER_DUP_FIELDNAME

消息：重复列名称’％s’

错误：1061SQLSTATE： （） 42000 ER_DUP_KEYNAME

消息：重复键名称’％s’

错误：1062SQLSTATE： （） 23000 ER_DUP_ENTRY

消息：键％d的重复条目’％s’

返回此消息的消息使用格式字符串 ER_DUP_ENTRY_WITH_KEY_NAME。

错误：1063SQLSTATE： （） 42000 ER_WRONG_FIELD_SPEC

消息：列’％s’的列说明符不正确

错误：1064SQLSTATE： （） 42000 ER_PARSE_ERROR

消息：％s在％s的’％s’附近

错误：1065SQLSTATE： （） 42000 ER_EMPTY_QUERY

消息：查询为空

错误：1066SQLSTATE： （） 42000 ER_NONUNIQ_TABLE

消息：不唯一的表/别名：’％s’

错误：1067SQLSTATE： （） 42000 ER_INVALID_DEFAULT

消息：’％s’的默认值无效

错误：1068SQLSTATE： （） 42000 ER_MULTIPLE_PRI_KEY

消息：定义多个主键

错误：1069SQLSTATE： （） 42000 ER_TOO_MANY_KEYS

消息：指定的密钥太多; 允许最大％d个键

错误：1070SQLSTATE： （） 42000 ER_TOO_MANY_KEY_PARTS

消息：指定的关键部件太多 最大％d份允许

错误：1071SQLSTATE： （） 42000 ER_TOO_LONG_KEY

消息：指定的密钥太长; 最大密钥长度为％d字节

错误：1072SQLSTATE： （） 42000 ER_KEY_COLUMN_DOES_NOT_EXITS

消息：表列中不存在键列’％s’

错误：1073SQLSTATE： （） 42000 ER_BLOB_USED_AS_KEY

消息：BLOB列’％s’不能用于使用表类型的键规范

错误：1074SQLSTATE： （） 42000 ER_TOO_BIG_FIELDLENGTH

消息：列’％s’的列长度太大（max =％lu）; 使用BLOB或TEXT

错误：1075SQLSTATE： （） 42000 ER_WRONG_AUTO_KEY

消息：表定义不正确; 只能有一个自动列，它必须被定义为一个键

错误：1076SQLSTATE： （） HY000 ER_READY

消息：％s：准备连接。版本：’％s’socket：’％s’port：％d

错误：1077SQLSTATE： （） HY000 ER_NORMAL_SHUTDOWN

消息：％s：正常关机

错误：1078SQLSTATE： （） HY000 ER_GOT_SIGNAL

消息：％s：得到信号％d。中止！

错误：1079SQLSTATE： （） HY000 ER_SHUTDOWN_COMPLETE

消息：％s：关机完成

错误：1080SQLSTATE： （） 08S01 ER_FORCING_CLOSE

消息：％s：强制关闭线程％ld user：’％s’

错误：1081SQLSTATE： （） 08S01 ER_IPSOCK_ERROR

消息：无法创建IP套接字

错误：1082SQLSTATE： （） 42S12 ER_NO_SUCH_INDEX

消息：表’％s’没有像CREATE INDEX中使用的索引; 重新创建表

错误：1083SQLSTATE： （） 42000 ER_WRONG_FIELD_TERMINATORS

消息：字段分隔符参数不是预期的; 检查手册

错误：1084SQLSTATE： （） 42000 ER_BLOBS_AND_NO_TERMINATED

消息：您不能使用BLOB的固定行长度; 请使用“终止的字段”

错误：1085SQLSTATE： （） HY000 ER_TEXTFILE_NOT_READABLE

消息：文件’％s’必须在数据库目录中或所有人都可读

错误：1086SQLSTATE： （） HY000 ER_FILE_EXISTS_ERROR

消息：文件’％s’已经存在

错误：1087SQLSTATE： （） HY000 ER_LOAD_INFO

消息：记录：％ld已删除：％ld已跳过：％ld警告：％ld

错误：1088SQLSTATE： （） HY000 ER_ALTER_INFO

消息：记录：％ld重复：％ld

错误：1089SQLSTATE： （） HY000 ER_WRONG_SUB_KEY

消息：前缀键不正确; 所使用的键部分不是字符串，所使用的长度比关键部分长，或者存储引擎不支持唯一的前缀键

错误：1090SQLSTATE： （） 42000 ER_CANT_REMOVE_ALL_FIELDS

消息：您不能使用ALTER TABLE删除所有列; 改用DROP TABLE

错误：1091SQLSTATE： （） 42000 ER_CANT_DROP_FIELD_OR_KEY

消息：不能DROP’％s’; 检查列/键是否存在

错误：1092SQLSTATE： （） HY000 ER_INSERT_INFO

消息：记录：％ld重复：％ld警告：％ld

错误：1093SQLSTATE： （） HY000 ER_UPDATE_TABLE_USED

消息：您不能为FROM子句中的更新指定目标表’％s’

在单个语句中尝试选择和修改同一个表时，会发生此错误。 如果选择尝试发生在派生表中，您可以通过设置系统变量的derived_merge标志 来避免此错误， optimizer_switch以强制将子查询实现为临时表，这有效地使其成为与修改的表不同的表。请参见第8.2.2.3节“优化派生表和查看引用”。

错误：1094SQLSTATE： （） HY000 ER_NO_SUCH_THREAD

消息：未知线程ID：％lu

错误：1095SQLSTATE： （） HY000 ER_KILL_DENIED_ERROR

消息：你不是线程％lu的所有者

错误：1096SQLSTATE： （） HY000 ER_NO_TABLES_USED

消息：没有使用表

错误：1097SQLSTATE： （） HY000 ER_TOO_BIG_SET

消息：列％s和SET的字符串太多

错误：1098SQLSTATE： （） HY000 ER_NO_UNIQUE_LOGFILE

消息：无法生成唯一的日志文件名％s（1-999）

错误：1099SQLSTATE： （） HY000 ER_TABLE_NOT_LOCKED_FOR_WRITE

消息：表’％s’被锁定，并且无法更新

错误：1100SQLSTATE： （） HY000 ER_TABLE_NOT_LOCKED

消息：表’％s’未锁定与LOCK TABLES

错误：1101SQLSTATE： （） 42000 ER_BLOB_CANT_HAVE_DEFAULT

消息：BLOB，TEXT，GEOMETRY或JSON列’％s’不能有默认值

错误：1102SQLSTATE： （） 42000 ER_WRONG_DB_NAME

消息：数据库名称’％s’不正确

错误：1103SQLSTATE： （） 42000 ER_WRONG_TABLE_NAME

消息：表名不正确’％s’

错误：1104SQLSTATE： （） 42000 ER_TOO_BIG_SELECT

消息：SELECT将检查超过MAX_JOIN_SIZE行; 检查你的WHERE并使用SET SQL_BIG_SELECTS = 1或SET MAX_JOIN_SIZE =＃如果SELECT可以

错误：1105SQLSTATE： （） HY000 ER_UNKNOWN_ERROR

消息：未知错误

错误：1106SQLSTATE： （） 42000 ER_UNKNOWN_PROCEDURE

消息：未知程序’％s’

错误：1107SQLSTATE： （） 42000 ER_WRONG_PARAMCOUNT_TO_PROCEDURE

消息：对程序’％s’的参数计数不正确

错误：1108SQLSTATE： （） HY000 ER_WRONG_PARAMETERS_TO_PROCEDURE

消息：过程’％s’的参数不正确

错误：1109SQLSTATE： （） 42S02 ER_UNKNOWN_TABLE

消息：％s中的未知表’％s’

错误：1110SQLSTATE： （） 42000 ER_FIELD_SPECIFIED_TWICE

消息：列’％s’指定两次

错误：1111SQLSTATE： （） HY000 ER_INVALID_GROUP_FUNC_USE

消息：使用组功能无效

错误：1112SQLSTATE： （） 42000 ER_UNSUPPORTED_EXTENSION

消息：表’％s’使用此MySQL版本中不存在的扩展名

错误：1113SQLSTATE： （） 42000 ER_TABLE_MUST_HAVE_COLUMNS

消息：表必须至少有1列

错误：1114SQLSTATE： （） HY000 ER_RECORD_FILE_FULL

消息：表’％s’已满

InnoDB当系统表空间耗尽可用空间时，会报告此错误。重新配置系统表空间以添加新的数据文件。

错误：1115SQLSTATE： （） 42000 ER_UNKNOWN_CHARACTER_SET

消息：未知字符集：’％s’

错误：1116SQLSTATE： （） HY000 ER_TOO_MANY_TABLES

消息：桌子太多了 MySQL只能在连接中使用％d表

错误：1117SQLSTATE： （） HY000 ER_TOO_MANY_FIELDS

消息：列数太多

错误：1118SQLSTATE： （） 42000 ER_TOO_BIG_ROWSIZE

消息：行大小太大。已使用表类型的最大行大小（不包括BLOB）为％ld。这包括存储开销，检查手册。您必须将一些列更改为TEXT或BLOB

错误：1119SQLSTATE： （） HY000 ER_STACK_OVERRUN

消息：线程堆栈溢出：使用：％ld的％ld堆栈。如果需要，使用’mysqld –thread_stack =＃’指定一个更大的堆栈

错误：1120SQLSTATE： （） 42000 ER_WRONG_OUTER_JOIN

消息：在OUTER JOIN中发现的相关依赖关系 检查你的ON条件

错误：1121SQLSTATE： （） 42000 ER_NULL_COLUMN_IN_INDEX

消息：表处理程序在给定索引中不支持NULL。请将列’％s’更改为NOT NULL或使用另一个处理程序

错误：1122SQLSTATE： （） HY000 ER_CANT_FIND_UDF

消息：无法加载函数’％s’

错误：1123SQLSTATE： （） HY000 ER_CANT_INITIALIZE_UDF

消息：无法初始化函数’％s’; ％S

错误：1124SQLSTATE： （） HY000 ER_UDF_NO_PATHS

消息：共享库不允许有路径

错误：1125SQLSTATE： （） HY000 ER_UDF_EXISTS

消息：函数’％s’已经存在

错误：1126SQLSTATE： （） HY000 ER_CANT_OPEN_LIBRARY

消息：无法打开共享库’％s’（errno：％d％s）

错误：1127SQLSTATE： （） HY000 ER_CANT_FIND_DL_ENTRY

消息：在库中找不到符号’％s’

错误：1128SQLSTATE： （） HY000 ER_FUNCTION_NOT_DEFINED

消息：函数’％s’未定义

错误：1129SQLSTATE： （） HY000 ER_HOST_IS_BLOCKED

消息：由于许多连接错误，主机’％s’被阻止 unblock with’mysqladmin flush-hosts’

错误：1130SQLSTATE： （） HY000 ER_HOST_NOT_PRIVILEGED

消息：主机’％s’不允许连接到这个MySQL服务器

错误：1131SQLSTATE： （） 42000 ER_PASSWORD_ANONYMOUS_USER

消息：您将MySQL用作匿名用户，匿名用户不得更改密码

错误：1132SQLSTATE： （） 42000 ER_PASSWORD_NOT_ALLOWED

消息：您必须具有更新mysql数据库中的表才能更改其他密码的权限

错误：1133SQLSTATE： （） 42000 ER_PASSWORD_NO_MATCH

消息：在用户表中找不到任何匹配的行

错误：1134SQLSTATE： （） HY000 ER_UPDATE_INFO

消息：匹配的行：％ld已更改：％ld警告：％ld

错误：1135SQLSTATE： （） HY000 ER_CANT_CREATE_THREAD

消息：无法创建新线程（errno％d）; 如果您不在可用内存中，则可以参考手册以获取可能的操作系统相关错误

错误：1136SQLSTATE： （） 21S01 ER_WRONG_VALUE_COUNT_ON_ROW

消息：列数与行％ld的值计数不匹配

错误：1137SQLSTATE： （） HY000 ER_CANT_REOPEN_TABLE

消息：无法重新打开表：’％s’

错误：1138SQLSTATE： （） 22004 ER_INVALID_USE_OF_NULL

消息：使用NULL值无效

错误：1139SQLSTATE： （） 42000 ER_REGEXP_ERROR

消息：从regexp得到错误’％s’

错误：1140SQLSTATE： （） 42000 ER_MIX_OF_GROUP_FUNC_AND_FIELDS

消息：如果没有GROUP BY子句，则将GROUP列（MIN（），MAX（），COUNT（），…）与GROUP列混合是非法的

错误：1141SQLSTATE： （） 42000 ER_NONEXISTING_GRANT

消息：在主机’％s’上没有为用户’％s’定义此类授权

错误：1142SQLSTATE： （） 42000 ER_TABLEACCESS_DENIED_ERROR

消息：％s命令拒绝用户’％s’@’％s’表’％s’

错误：1143SQLSTATE： （） 42000 ER_COLUMNACCESS_DENIED_ERROR

消息：表’％s’中列’％s’的用户’％s’@’％s’的％s命令被拒绝

错误：1144SQLSTATE： （） 42000 ER_ILLEGAL_GRANT_FOR_TABLE

消息：非法GRANT / REVOKE命令; 请参阅手册以查看可以使用哪些权限

错误：1145SQLSTATE： （） 42000 ER_GRANT_WRONG_HOST_OR_USER

消息：GRANT的主机或用户参数太长

错误：1146SQLSTATE： （） 42S02 ER_NO_SUCH_TABLE

消息：表’％s。％s’不存在

错误：1147SQLSTATE： （） 42000 ER_NONEXISTING_TABLE_GRANT

消息：表’％s’上的主机’％s’上的用户’％s’没有定义此类授权

错误：1148SQLSTATE： （） 42000 ER_NOT_ALLOWED_COMMAND

消息：这个MySQL版本不允许使用的命令

错误：1149SQLSTATE： （） 42000 ER_SYNTAX_ERROR

消息：您的SQL语法有错误; 检查与您的MySQL服务器版本相对应的手册，以获得正确的语法使用

错误：1150SQLSTATE： （） HY000 ER_UNUSED1

消息：延迟的插入线程无法获取表％s的请求锁

错误：1151SQLSTATE： （） HY000 ER_UNUSED2

消息：使用延迟线程太多

错误：1152SQLSTATE： （） 08S01 ER_ABORTING_CONNECTION

消息：中止连接％ld到db：’％s’user：’％s’（％s）

错误：1153SQLSTATE： （） 08S01 ER_NET_PACKET_TOO_LARGE

消息：有一个大于’max_allowed_pa​​cket’字节的数据包

错误：1154SQLSTATE： （） 08S01 ER_NET_READ_ERROR_FROM_PIPE

消息：从连接管道读取错误

错误：1155SQLSTATE： （） 08S01 ER_NET_FCNTL_ERROR

消息：从fcntl（）得到一个错误

错误：1156SQLSTATE： （） 08S01 ER_NET_PACKETS_OUT_OF_ORDER

消息：数据包发生乱序

错误：1157SQLSTATE： （） 08S01 ER_NET_UNCOMPRESS_ERROR

消息：无法解压缩通信包

错误：1158SQLSTATE： （） 08S01 ER_NET_READ_ERROR

消息：读取通信数据包时出错

错误：1159SQLSTATE： （） 08S01 ER_NET_READ_INTERRUPTED

消息：超时读取通信包

错误：1160SQLSTATE： （） 08S01 ER_NET_ERROR_ON_WRITE

消息：编写通信数据包时出错

错误：1161SQLSTATE： （） 08S01 ER_NET_WRITE_INTERRUPTED

消息：超时写通信包

错误：1162SQLSTATE： （） 42000 ER_TOO_LONG_STRING

消息：结果字符串长于’max_allowed_pa​​cket’字节

错误：1163SQLSTATE： （） 42000 ER_TABLE_CANT_HANDLE_BLOB

消息：used表类型不支持BLOB / TEXT列

错误：1164SQLSTATE： （） 42000 ER_TABLE_CANT_HANDLE_AUTO_INCREMENT

消息：used表类型不支持AUTO_INCREMENT列

错误：1165SQLSTATE： （） HY000 ER_UNUSED3

消息：INSERT DELAYED不能与表’％s’一起使用，因为它与LOCK TABLES锁定

错误：1166SQLSTATE： （） 42000 ER_WRONG_COLUMN_NAME

消息：不正确的列名称’％s’

错误：1167SQLSTATE： （） 42000 ER_WRONG_KEY_COLUMN

消息：二手的存储引擎无法对列’％s’进行索引

错误：1168SQLSTATE： （） HY000 ER_WRONG_MRG_TABLE

消息：无法打开不同的定义或非MyISAM类型或不存在的基础表

错误：1169SQLSTATE： （） 23000 ER_DUP_UNIQUE

消息：由于唯一约束，无法写入表’％s’

错误：1170SQLSTATE： （） 42000 ER_BLOB_KEY_WITHOUT_LENGTH

消息：BLOCK / TEXT列’％s’用于密钥规范中，没有密钥长度

错误：1171SQLSTATE： （） 42000 ER_PRIMARY_CANT_HAVE_NULL

消息：PRIMARY KEY的所有部分必须不为NULL; 如果在一个键中需要NULL，则使用UNIQUE

错误：1172SQLSTATE： （） 42000 ER_TOO_MANY_ROWS

消息：结果由多行组成

错误：1173SQLSTATE： （） 42000 ER_REQUIRES_PRIMARY_KEY

消息：此表类型需要一个主键

错误：1174SQLSTATE： （） HY000 ER_NO_RAID_COMPILED

消息：此版本的MySQL未编译支持RAID

错误：1175SQLSTATE： （） HY000 ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE

消息：您正在使用安全更新模式，并尝试更新一个没有使用KEY列的WHERE表

错误：1176SQLSTATE： （） 42000 ER_KEY_DOES_NOT_EXITS

消息：表’％s’中不存在键’％s’

错误：1177SQLSTATE： （） 42000 ER_CHECK_NO_SUCH_TABLE

消息：无法打开表

错误：1178SQLSTATE： （） 42000 ER_CHECK_NOT_IMPLEMENTED

消息：表的存储引擎不支持％s

错误：1179SQLSTATE： （） 25000 ER_CANT_DO_THIS_DURING_AN_TRANSACTION

消息：您不能在事务中执行此命令

错误：1180SQLSTATE： （） HY000 ER_ERROR_DURING_COMMIT

消息：COMMIT期间错误％d

错误：1181SQLSTATE： （） HY000 ER_ERROR_DURING_ROLLBACK

消息：在ROLLBACK期间错误％d

错误：1182SQLSTATE： （） HY000 ER_ERROR_DURING_FLUSH_LOGS

消息：在FLUSH_LOGS期间错误％d

错误：1183SQLSTATE： （） HY000 ER_ERROR_DURING_CHECKPOINT

消息：在CHECKPOINT期间发生错误％d

错误：1184SQLSTATE： （） 08S01 ER_NEW_ABORTING_CONNECTION

消息：中止连接％u到db：’％s’user：’％s’host：’％s’（％s）

错误：1185SQLSTATE： （） HY000 ER_DUMP_NOT_IMPLEMENTED

消息：表的存储引擎不支持二进制表转储

错误：1186SQLSTATE： （） HY000 ER_FLUSH_MASTER_BINLOG_CLOSED

消息：Binlog关闭，无法复位MASTER

错误：1187SQLSTATE： （） HY000 ER_INDEX_REBUILD

消息：重建转储表’％s’的索引失败

错误：1188SQLSTATE： （） HY000 ER_MASTER

消息：主人错误：’％s’

错误：1189SQLSTATE： （） 08S01 ER_MASTER_NET_READ

消息：从主机读取的网络错误

错误：1190SQLSTATE： （） 08S01 ER_MASTER_NET_WRITE

消息：网络错误写入主

错误：1191SQLSTATE： （） HY000 ER_FT_MATCHING_KEY_NOT_FOUND

消息：找不到与列列表匹配的FULLTEXT索引

错误：1192SQLSTATE： （） HY000 ER_LOCK_OR_ACTIVE_TRANSACTION

消息：无法执行给定的命令，因为您有活动的锁定表或活动事务

错误：1193SQLSTATE： （） HY000 ER_UNKNOWN_SYSTEM_VARIABLE

消息：未知系统变量’％s’

错误：1194SQLSTATE： （） HY000 ER_CRASHED_ON_USAGE

消息：表’％s’标记为已崩溃，应进行修复

错误：1195SQLSTATE： （） HY000 ER_CRASHED_ON_REPAIR

消息：表’％s’被标记为崩溃，最后（自动？）修复失败

错误：1196SQLSTATE： （） HY000 ER_WARNING_NOT_COMPLETE_ROLLBACK

消息：某些非事务性更改的表无法回退

错误：1197SQLSTATE： （） HY000 ER_TRANS_CACHE_FULL

消息：多语句事务需要超过’max_binlog_cache_size’字节的存储空间; 增加这个mysqld变量，然后再试一次

错误：1198SQLSTATE： （） HY000 ER_SLAVE_MUST_STOP

消息：无法使用正在运行的从站执行此操作; 首先运行STOP SLAVE

错误：1199SQLSTATE： （） HY000 ER_SLAVE_NOT_RUNNING

消息：此操作需要运行的从站; 配置从站并执行START SLAVE

错误：1200SQLSTATE： （） HY000 ER_BAD_SLAVE

消息：服务器未配置为从站; 修复配置文件或使用CHANGE MASTER TO

错误：1201SQLSTATE： （） HY000 ER_MASTER_INFO

消息：无法初始化主信息结构; 在MySQL错误日志中可以找到更多的错误信息

错误：1202SQLSTATE： （） HY000 ER_SLAVE_THREAD

消息：无法创建从线程; 检查系统资源

错误：1203SQLSTATE： （） 42000 ER_TOO_MANY_USER_CONNECTIONS

消息：用户％s已经有超过’max_user_connections’活动连接

错误：1204SQLSTATE： （） HY000 ER_SET_CONSTANTS_ONLY

消息：您只能使用SET的常量表达式

错误：1205SQLSTATE： （） HY000 ER_LOCK_WAIT_TIMEOUT

消息：超过锁定等待超时 尝试重新启动事务

InnoDB当锁等待超时到期时报告此错误。等待太久的声明 回滚（而不是整个 交易）。innodb_lock_wait_timeout 如果SQL语句等待更长时间才能完成其他事务，则可以增加配置选项的值，或者如果太多的长时间运行的事务导致锁定问题并减少 繁忙系统上的并发，则可以减少配置选项 的值 。

错误：1206SQLSTATE： （） HY000 ER_LOCK_TABLE_FULL

消息：锁总数超过锁表大小

InnoDB当锁总数超过用于管理锁的内存量时，会报告此错误。要避免此错误，请增加其值 innodb_buffer_pool_size。在单个应用程序中，解决方法可能是将大型操作分解成较小的部分。例如，如果发生大错误INSERT，请执行几个较小的INSERT操作。

错误：1207SQLSTATE： （） 25000 ER_READ_ONLY_TRANSACTION

消息：在READ UNCOMMITTED事务期间无法获取更新锁

错误：1208SQLSTATE： （） HY000 ER_DROP_DB_WITH_READ_LOCK

消息：当线程持有全局读锁定时，不允许DROP DATABASE

错误：1209SQLSTATE： （） HY000 ER_CREATE_DB_WITH_READ_LOCK

消息：当线程持有全局读锁定时，不允许CREATE DATABASE

错误：1210SQLSTATE： （） HY000 ER_WRONG_ARGUMENTS

消息：％s的参数不正确

错误：1211SQLSTATE： （） 42000 ER_NO_PERMISSION_TO_CREATE_USER

消息：’％s’@’％s’不允许创建新用户

错误：1212SQLSTATE： （） HY000 ER_UNION_TABLES_IN_DIFFERENT_DIR

消息：表定义不正确; 所有MERGE表必须在同一个数据库中

错误：1213SQLSTATE： （） 40001 ER_LOCK_DEADLOCK

消息：尝试锁定时发现死锁; 尝试重新启动事务

InnoDB当事务遇到 死锁并自动 回滚时，会报告此错误， 以便您的应用程序可以采取纠正措施。要从此错误中恢复，请再次运行此事务中的所有操作。当锁的请求在事务之间以不一致的顺序到达时发生死锁。回滚的事务释放了所有的锁，而另一个事务现在可以获得它所请求的所有锁。因此，当您重新运行回滚的事务时，可能需要等待其他事务完成，但通常不会再次出现死锁。如果遇到频繁的死锁，请使遇到问题的不同事务或应用程序之间的锁定操作（LOCK TABLES，SELECT … FOR UPDATE等等）顺序一致。有关详细信息，请参见 第14.5.5节“InnoDB中的死锁”。

错误：1214SQLSTATE： （） HY000 ER_TABLE_CANT_HANDLE_FT

消息：used表类型不支持FULLTEXT索引

错误：1215SQLSTATE： （） HY000 ER_CANNOT_ADD_FOREIGN

消息：无法添加外键约束

错误：1216SQLSTATE： （） 23000 ER_NO_REFERENCED_ROW

消息：无法添加或更新子行：外键约束失败

InnoDB当您尝试添加一行但没有父行，并且外键约束失败时报告此错误 。 先添加父行。

错误：1217SQLSTATE： （） 23000 ER_ROW_IS_REFERENCED

消息：无法删除或更新父行：外键约束失败

InnoDB当您尝试删除具有子项的父行，并且外键约束失败时，会报告此错误 。 先删除孩子

错误：1218SQLSTATE： （） 08S01 ER_CONNECT_TO_MASTER

消息：连接到主机时出错：％s

错误：1219SQLSTATE： （） HY000 ER_QUERY_ON_MASTER

消息：在master上运行查询时出错：％s

错误：1220SQLSTATE： （） HY000 ER_ERROR_WHEN_EXECUTING_COMMAND

消息：执行命令％s时出错：％s

错误：1221SQLSTATE： （） HY000 ER_WRONG_USAGE

消息：％s和％s的使用率不正确

错误：1222SQLSTATE： （） 21000 ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT

消息：所使用的SELECT语句具有不同的列数

错误：1223SQLSTATE： （） HY000 ER_CANT_UPDATE_WITH_READLOCK

消息：无法执行查询，因为您有一个冲突的读锁

错误：1224SQLSTATE： （） HY000 ER_MIXING_NOT_ALLOWED

消息：禁用事务和非事务表的混合

错误：1225SQLSTATE： （） HY000 ER_DUP_ARGUMENT

消息：选项’％s’在语句中使用两次

错误：1226SQLSTATE： （） 42000 ER_USER_LIMIT_REACHED

消息：用户’％s’已经超过’％s’资源（当前值：％ld）

错误：1227SQLSTATE： （） 42000 ER_SPECIFIC_ACCESS_DENIED_ERROR

消息：拒绝访问 您需要（至少有一个）此操作的％s权限

错误：1228SQLSTATE： （） HY000 ER_LOCAL_VARIABLE

消息：变量’％s’是一个SESSION变量，不能与SET GLOBAL一起使用

错误：1229SQLSTATE： （） HY000 ER_GLOBAL_VARIABLE

消息：变量’％s’是GLOBAL变量，应使用SET GLOBAL设置

错误：1230SQLSTATE： （） 42000 ER_NO_DEFAULT

消息：变量’％s’没有默认值

错误：1231SQLSTATE： （） 42000 ER_WRONG_VALUE_FOR_VAR

消息：变量’％s’不能设置为’％s’的值

错误：1232SQLSTATE： （） 42000 ER_WRONG_TYPE_FOR_VAR

消息：变量’％s’的参数类型不正确

错误：1233SQLSTATE： （） HY000 ER_VAR_CANT_BE_READ

消息：变量’％s’只能设置，不能读取

错误：1234SQLSTATE： （） 42000 ER_CANT_USE_OPTION_HERE

消息：“％s”的使用/位置不正确

错误：1235SQLSTATE： （） 42000 ER_NOT_SUPPORTED_YET

消息：此版本的MySQL尚不支持’％s’

错误：1236SQLSTATE： （） HY000 ER_MASTER_FATAL_ERROR_READING_BINLOG

消息：从二进制日志中读取数据时，从主机得到致命错误％d：’％s’

错误：1237SQLSTATE： （） HY000 ER_SLAVE_IGNORED_TABLE

消息：由于复制 - * - 表规则，从机SQL线程忽略了查询

错误：1238SQLSTATE： （） HY000 ER_INCORRECT_GLOBAL_LOCAL_VAR

消息：变量’％s’是一个％s变量

错误：1239SQLSTATE： （） 42000 ER_WRONG_FK_DEF

消息：’％s’的外键定义不正确：％s

错误：1240SQLSTATE： （） HY000 ER_KEY_REF_DO_NOT_MATCH_TABLE_REF

消息：关键参考和表参考不匹配

错误：1241SQLSTATE： （） 21000 ER_OPERAND_COLUMNS

消息：操作数应包含％d列

错误：1242SQLSTATE： （） 21000 ER_SUBQUERY_NO_1_ROW

消息：子查询返回多行

错误：1243SQLSTATE： （） HY000 ER_UNKNOWN_STMT_HANDLER

消息：未知的准备好的语句处理程序（％。* s）给予％s

错误：1244SQLSTATE： （） HY000 ER_CORRUPT_HELP_DB

消息：帮助数据库已损坏或不存在

错误：1245SQLSTATE： （） HY000 ER_CYCLIC_REFERENCE

消息：子查询上的循环引用

错误：1246SQLSTATE： （） HY000 ER_AUTO_CONVERT

消息：将列’％s’从％s转换为％s

错误：1247SQLSTATE： （） 42S22 ER_ILLEGAL_REFERENCE

消息：引用’％s’不支持（％s）

错误：1248SQLSTATE： （） 42000 ER_DERIVED_MUST_HAVE_ALIAS

消息：每个派生表必须有自己的别名

错误：1249SQLSTATE： （） 01000 ER_SELECT_REDUCED

消息：选择％u在优化期间减少

错误：1250SQLSTATE： （） 42000 ER_TABLENAME_NOT_ALLOWED_HERE

消息：其中一个SELECT的表’％s’不能在％s中使用

错误：1251SQLSTATE： （） 08004 ER_NOT_SUPPORTED_AUTH_MODE

消息：客户端不支持服务器请求的认证协议; 考虑升级MySQL客户端

错误：1252SQLSTATE： （） 42000 ER_SPATIAL_CANT_HAVE_NULL

消息：空间索引的所有部分必须不为空

错误：1253SQLSTATE： （） 42000 ER_COLLATION_CHARSET_MISMATCH

消息：COLLATION’％s’对CHARACTER SET’％s’无效

错误：1254SQLSTATE： （） HY000 ER_SLAVE_WAS_RUNNING

消息：从站已经运行

错误：1255SQLSTATE： （） HY000 ER_SLAVE_WAS_NOT_RUNNING

消息：从站已经停止

错误：1256SQLSTATE： （） HY000 ER_TOO_BIG_FOR_UNCOMPRESS

消息：未压缩的数据大小太大; 最大大小为％d（可能，未压缩数据的长度已损坏）

错误：1257SQLSTATE： （） HY000 ER_ZLIB_Z_MEM_ERROR

消息：ZLIB：内存不足

错误：1258SQLSTATE： （） HY000 ER_ZLIB_Z_BUF_ERROR

消息：ZLIB：输出缓冲区中没有足够的空间（可能，未压缩数据的长度已损坏）

错误：1259SQLSTATE： （） HY000 ER_ZLIB_Z_DATA_ERROR

消息：ZLIB：输入数据已损坏

错误：1260SQLSTATE： （） HY000 ER_CUT_VALUE_GROUP_CONCAT

消息：行％u被GROUP_CONCAT（）

错误：1261SQLSTATE： （） 01000 ER_WARN_TOO_FEW_RECORDS

消息：行％ld不包含所有列的数据

错误：1262SQLSTATE： （） 01000 ER_WARN_TOO_MANY_RECORDS

消息：行％ld被截断; 它包含比输入列更多的数据

错误：1263SQLSTATE： （） 22004 ER_WARN_NULL_TO_NOTNULL

消息：列设置为默认值; NULL列提供给NOT NULL列’％s’在行％ld

错误：1264SQLSTATE： （） 22003 ER_WARN_DATA_OUT_OF_RANGE

消息：行％ld的列’％s’的范围值超出范围

错误：1265SQLSTATE： （） 01000 WARN_DATA_TRUNCATED

消息：行％ld的列’％s’的数据被截断

错误：1266SQLSTATE： （） HY000 ER_WARN_USING_OTHER_HANDLER

消息：使用存储引擎％s表’％s’

错误：1267SQLSTATE： （） HY000 ER_CANT_AGGREGATE_2COLLATIONS

消息：操作’％s’的排序规则（％s，％s）和（％s，％s）的非法组合

错误：1268SQLSTATE： （） HY000 ER_DROP_USER

消息：无法删除一个或多个请求的用户

错误：1269SQLSTATE： （） HY000 ER_REVOKE_GRANTS

消息：无法撤销一个或多个请求的用户的所有权限

错误：1270SQLSTATE： （） HY000 ER_CANT_AGGREGATE_3COLLATIONS

消息：操作’％s’的排序规则的非法组合（％s，％s），（％s，％s），（％s，％s）

错误：1271SQLSTATE： （） HY000 ER_CANT_AGGREGATE_NCOLLATIONS

消息：非法混合操作’％s’

错误：1272SQLSTATE： （） HY000 ER_VARIABLE_IS_NOT_STRUCT

消息：变量’％s’不是变量组件（不能用作XXXX.variable_name）

错误：1273SQLSTATE： （） HY000 ER_UNKNOWN_COLLATION

消息：未知排序规则：’％s’

错误：1274SQLSTATE： （） HY000 ER_SLAVE_IGNORED_SSL_PARAMS

消息：CHANGE MASTER中的SSL参数被忽略，因为这个MySQL从站在没有SSL支持的情况下被编译; 如果使用SSL的MySQL从站启动，则可以使用它们

错误：1275SQLSTATE： （） HY000 ER_SERVER_IS_IN_SECURE_AUTH_MODE

消息：服务器以–secure-auth模式运行，但’％s’@’％s’具有旧格式的密码; 请将密码更改为新格式

错误：1276SQLSTATE： （） HY000 ER_WARN_FIELD_RESOLVED

消息：SELECT＃％d中的字段或引用’％s％s％s％s％s’已在SELECT＃％d中解析

错误：1277SQLSTATE： （） HY000 ER_BAD_SLAVE_UNTIL_COND

消息：START SLAVE UNTIL的参数不正确或参数组合

错误：1278SQLSTATE： （） HY000 ER_MISSING_SKIP_SLAVE

消息：建议在使用START SLAVE UNTIL进行分步复制时使用–skip-slave-start; 否则，如果您收到意外的从站的mysqld重新启动，您将收到问题

错误：1279SQLSTATE： （） HY000 ER_UNTIL_COND_IGNORED

消息：SQL线程不被启动，因此UNTIL选项将被忽略

错误：1280SQLSTATE： （） 42000 ER_WRONG_NAME_FOR_INDEX

消息：索引名称’％s’不正确

错误：1281SQLSTATE： （） 42000 ER_WRONG_NAME_FOR_CATALOG

消息：目录名称’％s’不正确

错误：1282SQLSTATE： （） HY000 ER_WARN_QC_RESIZE

消息：查询缓存无法设置大小％lu; 新的查询缓存大小为％lu

错误：1283SQLSTATE： （） HY000 ER_BAD_FT_COLUMN

消息：列’％s’不能作为FULLTEXT索引的一部分

错误：1284SQLSTATE： （） HY000 ER_UNKNOWN_KEY_CACHE

消息：未知密钥缓存’％s’

错误：1285SQLSTATE： （） HY000 ER_WARN_HOSTNAME_WONT_WORK

消息：MySQL以-skip-name-resolve模式启动; 您必须重新启动它，没有此开关才能使此授权工作

错误：1286SQLSTATE： （） 42000 ER_UNKNOWN_STORAGE_ENGINE

消息：未知的存储引擎’％s’

错误：1287SQLSTATE： （） HY000 ER_WARN_DEPRECATED_SYNTAX

消息：’％s’已被弃用，将在以后的版本中被删除。请改用％s

错误：1288SQLSTATE： （） HY000 ER_NON_UPDATABLE_TABLE

消息：％s的目标表％s不可更新

错误：1289SQLSTATE： （） HY000 ER_FEATURE_DISABLED

消息：’％s’功能被禁用; 您需要使用“％s”构建的MySQL来使其工作

错误：1290SQLSTATE： （） HY000 ER_OPTION_PREVENTS_STATEMENT

消息：MySQL服务器正在使用％s选项，因此无法执行此语句

错误：1291SQLSTATE： （） HY000 ER_DUPLICATED_VALUE_IN_TYPE

消息：列’％s’在％s中具有重复的值’％s’

错误：1292SQLSTATE： （） 22007 ER_TRUNCATED_WRONG_VALUE

消息：截断错误的％s值：’％s’

错误：1293SQLSTATE： （） HY000 ER_TOO_MUCH_AUTO_TIMESTAMP_COLS

消息：表定义不正确; 在DEFAULT或ON UPDATE子句中只能有一个带有CURRENT_TIMESTAMP的TIMESTAMP列

错误：1294SQLSTATE： （） HY000 ER_INVALID_ON_UPDATE

消息：’％s’列的ON UPDATE子句无效

错误：1295SQLSTATE： （） HY000 ER_UNSUPPORTED_PS

消息：准备好的语句协议中不支持此命令

错误：1296SQLSTATE： （） HY000 ER_GET_ERRMSG

消息：从％s得到错误％d’％s’

错误：1297SQLSTATE： （） HY000 ER_GET_TEMPORARY_ERRMSG

消息：从％s获得临时错误％d’％s’

错误：1298SQLSTATE： （） HY000 ER_UNKNOWN_TIME_ZONE

消息：未知或不正确的时区：’％s’

错误：1299SQLSTATE： （） HY000 ER_WARN_INVALID_TIMESTAMP

消息：行％ld列’％s’中的TIMESTAMP值无效

错误：1300SQLSTATE： （） HY000 ER_INVALID_CHARACTER_STRING

消息：％s字符串无效：’％s’

错误：1301SQLSTATE： （） HY000 ER_WARN_ALLOWED_PACKET_OVERFLOWED

消息：％s（）的结果大于max_allowed_pa​​cket（％ld） - 被截断

错误：1302SQLSTATE： （） HY000 ER_CONFLICTING_DECLARATIONS

消息：冲突声明：’％s％s’和’％s％s’

错误：1303SQLSTATE： （） 2F003 ER_SP_NO_RECURSIVE_CREATE

消息：无法从另一个存储的例程中创建一个％s

错误：1304SQLSTATE： （） 42000 ER_SP_ALREADY_EXISTS

消息：％s％s已存在

错误：1305SQLSTATE： （） 42000 ER_SP_DOES_NOT_EXIST

消息：％s％s不存在

错误：1306SQLSTATE： （） HY000 ER_SP_DROP_FAILED

消息：无法DROP％s％s

错误：1307SQLSTATE： （） HY000 ER_SP_STORE_FAILED

消息：无法CREATE％s％s

错误：1308SQLSTATE： （） 42000 ER_SP_LILABEL_MISMATCH

消息：％s没有匹配的标签：％s

错误：1309SQLSTATE： （） 42000 ER_SP_LABEL_REDEFINE

消息：重新定义标签％s

错误：1310SQLSTATE： （） 42000 ER_SP_LABEL_MISMATCH

消息：终端标签％s无匹配

错误：1311SQLSTATE： （） 01000 ER_SP_UNINIT_VAR

消息：引用未初始化的变量％s

错误：1312SQLSTATE： （） 0A000 ER_SP_BADSELECT

消息：PROCEDURE％s无法返回给定上下文中的结果集

错误：1313SQLSTATE： （） 42000 ER_SP_BADRETURN

消息：只能在FUNCTION中使用RETURN

错误：1314SQLSTATE： （） 0A000 ER_SP_BADSTATEMENT

消息：存储过程中不允许使用％s

错误：1315SQLSTATE： （） 42000 ER_UPDATE_LOG_DEPRECATED_IGNORED

消息：更新日志已被弃用，并被二进制日志替换; SET SQL_LOG_UPDATE已被忽略。

错误：1316SQLSTATE： （） 42000 ER_UPDATE_LOG_DEPRECATED_TRANSLATED

消息：更新日志已被弃用，并被二进制日志替换; SET SQL_LOG_UPDATE已经被转换为SET SQL_LOG_BIN。

错误：1317SQLSTATE： （） 70100 ER_QUERY_INTERRUPTED

消息：查询执行中断

错误：1318SQLSTATE： （） 42000 ER_SP_WRONG_NO_OF_ARGS

消息：％s％s的参数数不正确; 预期％u，得到％u

错误：1319SQLSTATE： （） 42000 ER_SP_COND_MISMATCH

消息：未定义CONDITION：％s

错误：1320SQLSTATE： （） 42000 ER_SP_NORETURN

消息：在FUNCTION％s中找不到RETURN

错误：1321SQLSTATE： （） 2F005 ER_SP_NORETURNEND

消息：FUNCTION％s在没有RETURN的情况下结束

错误：1322SQLSTATE： （） 42000 ER_SP_BAD_CURSOR_QUERY

消息：Cursor语句必须是SELECT

错误：1323SQLSTATE： （） 42000 ER_SP_BAD_CURSOR_SELECT

消息：光标SELECT不能有INTO

错误：1324SQLSTATE： （） 42000 ER_SP_CURSOR_MISMATCH

消息：未定义游标：％s

错误：1325SQLSTATE： （） 24000 ER_SP_CURSOR_ALREADY_OPEN

消息：游标已经打开

错误：1326SQLSTATE： （） 24000 ER_SP_CURSOR_NOT_OPEN

消息：光标未打开

错误：1327SQLSTATE： （） 42000 ER_SP_UNDECLARED_VAR

消息：未声明的变量：％s

错误：1328SQLSTATE： （） HY000 ER_SP_WRONG_NO_OF_FETCH_ARGS

消息：FETCH变量数量不正确

错误：1329SQLSTATE： （） 02000 ER_SP_FETCH_NO_DATA

消息：没有数据 - 提取，选择或处理零行

错误：1330SQLSTATE： （） 42000 ER_SP_DUP_PARAM

消息：重复参数：％s

错误：1331SQLSTATE： （） 42000 ER_SP_DUP_VAR

消息：重复变量：％s

错误：1332SQLSTATE： （） 42000 ER_SP_DUP_COND

消息：重复条件：％s

错误：1333SQLSTATE： （） 42000 ER_SP_DUP_CURS

消息：重复的光标：％s

错误：1334SQLSTATE： （） HY000 ER_SP_CANT_ALTER

消息：ALTER％s％s失败

错误：1335SQLSTATE： （） 0A000 ER_SP_SUBSELECT_NYI

消息：不支持子查询值

错误：1336SQLSTATE： （） 0A000 ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG

消息：存储的函数或触发器中不允许使用％s

错误：1337SQLSTATE： （） 42000 ER_SP_VARCOND_AFTER_CURSHNDLR

消息：游标或处理程序声明后的变量或条件声明

错误：1338SQLSTATE： （） 42000 ER_SP_CURSOR_AFTER_HANDLER

消息：处理程序声明后的光标声明

错误：1339SQLSTATE： （） 20000 ER_SP_CASE_NOT_FOUND

消息：CASE语句未找到案例

错误：1340SQLSTATE： （） HY000 ER_FPARSER_TOO_BIG_FILE

消息：配置文件’％s’太大了

错误：1341SQLSTATE： （） HY000 ER_FPARSER_BAD_HEADER

消息：文件’％s’中格式错误的文件类型头

错误：1342SQLSTATE： （） HY000 ER_FPARSER_EOF_IN_COMMENT

消息：解析注释’％s’时意外的文件结尾

错误：1343SQLSTATE： （） HY000 ER_FPARSER_ERROR_IN_PARAMETER

消息：解析参数’％s’时出错（行：’％s’）

错误：1344SQLSTATE： （） HY000 ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER

消息：跳过未知参数’％s’时意外的文件结尾

错误：1345SQLSTATE： （） HY000 ER_VIEW_NO_EXPLAIN

消息：EXPLAIN / SHOW不能发出; 缺乏基础表的特权

错误：1346SQLSTATE： （） HY000 ER_FRM_UNKNOWN_TYPE

消息：文件’％s’在其标题中具有未知类型’％s’

错误：1347SQLSTATE： （） HY000 ER_WRONG_OBJECT

消息：’％s。％s’不是％s

命名对象对于尝试的操作类型不正确。它必须是命名类型的对象。

错误：1348SQLSTATE： （） HY000 ER_NONUPDATEABLE_COLUMN

消息：列’％s’不可更新

错误：1349SQLSTATE： （） HY000 ER_VIEW_SELECT_DERIVED

消息：View的SELECT包含FROM子句中的子查询

ER_VIEW_SELECT_DERIVED 5.7.6之后被删除。

错误：1349SQLSTATE： （） HY000 ER_VIEW_SELECT_DERIVED_UNUSED

消息：View的SELECT包含FROM子句中的子查询

ER_VIEW_SELECT_DERIVED_UNUSED 在5.7.7中加了。

错误：1350SQLSTATE： （） HY000 ER_VIEW_SELECT_CLAUSE

消息：视图的SELECT包含’％s’子句

错误：1351SQLSTATE： （） HY000 ER_VIEW_SELECT_VARIABLE

消息：视图的SELECT包含变量或参数

错误：1352SQLSTATE： （） HY000 ER_VIEW_SELECT_TMPTABLE

消息：View的SELECT表示临时表’％s’

错误：1353SQLSTATE： （） HY000 ER_VIEW_WRONG_LIST

消息：视图的SELECT和视图的字段列表具有不同的列数

错误：1354SQLSTATE： （） HY000 ER_WARN_VIEW_MERGE

消息：查看合并算法现在无法使用（假定未定义的算法）

错误：1355SQLSTATE： （） HY000 ER_WARN_VIEW_WITHOUT_KEY

消息：正在更新的视图没有基础表的完整密钥

错误：1356SQLSTATE： （） HY000 ER_VIEW_INVALID

消息：查看’％s。％s’引用无效表或列或函数或定义/调用者视图缺乏使用它们的权限

错误：1357SQLSTATE： （） HY000 ER_SP_NO_DROP_SP

消息：无法从另一个存储的例程中删除或更改％s

错误：1358SQLSTATE： （） HY000 ER_SP_GOTO_IN_HNDLR

消息：存储过程处理程序中不允许使用GOTO

错误：1359SQLSTATE： （） HY000 ER_TRG_ALREADY_EXISTS

消息：触发器已存在

错误：1360SQLSTATE： （） HY000 ER_TRG_DOES_NOT_EXIST

消息：触发器不存在

错误：1361SQLSTATE： （） HY000 ER_TRG_ON_VIEW_OR_TEMP_TABLE

消息：触发器的’％s’是视图或临时表

错误：1362SQLSTATE： （） HY000 ER_TRG_CANT_CHANGE_ROW

消息：％strigger中不允许更新％s行

错误：1363SQLSTATE： （） HY000 ER_TRG_NO_SUCH_ROW_IN_TRG

消息：％s触发器中没有％s行

错误：1364SQLSTATE： （） HY000 ER_NO_DEFAULT_FOR_FIELD

消息：字段’％s’没有默认值

错误：1365SQLSTATE： （） 22012 ER_DIVISION_BY_ZERO

消息：分0

错误：1366SQLSTATE： （） HY000 ER_TRUNCATED_WRONG_VALUE_FOR_FIELD

消息：％s值不正确：行％ld的列’％s’的’％s’

错误：1367SQLSTATE： （） 22007 ER_ILLEGAL_VALUE_FOR_TYPE

消息：解析期间发现非法％s’％s’值

错误：1368SQLSTATE： （） HY000 ER_VIEW_NONUPD_CHECK

消息：检查选项不可更新视图’％s。％s’

错误：1369SQLSTATE： （） HY000 ER_VIEW_CHECK_FAILED

消息：CHECK OPTION失败’％s。％s’

错误：1370SQLSTATE： （） 42000 ER_PROCACCESS_DENIED_ERROR

消息：％s命令拒绝用户’％s’@’％s’用于例程’％s’

错误：1371SQLSTATE： （） HY000 ER_RELAY_LOG_FAIL

消息：无法清除旧的中继日志：％s

错误：1372SQLSTATE： （） HY000 ER_PASSWD_LENGTH

消息：密码哈希值应为％d位十六进制数

错误：1373SQLSTATE： （） HY000 ER_UNKNOWN_TARGET_BINLOG

消息：在binlog索引中找不到目标日志

错误：1374SQLSTATE： （） HY000 ER_IO_ERR_LOG_INDEX_READ

消息：I / O错误读取日志索引文件

错误：1375SQLSTATE： （） HY000 ER_BINLOG_PURGE_PROHIBITED

消息：服务器配置不允许binlog清除

错误：1376SQLSTATE： （） HY000 ER_FSEEK_FAIL

消息：fseek（）失败

错误：1377SQLSTATE： （） HY000 ER_BINLOG_PURGE_FATAL_ERR

消息：日志清除期间的致命错误

错误：1378SQLSTATE： （） HY000 ER_LOG_IN_USE

消息：可清除日志正在使用中，不会清除

错误：1379SQLSTATE： （） HY000 ER_LOG_PURGE_UNKNOWN_ERR

消息：日志清除期间的未知错误

错误：1380SQLSTATE： （） HY000 ER_RELAY_LOG_INIT

消息：初始化继电器日志位置失败：％s

错误：1381SQLSTATE： （） HY000 ER_NO_BINARY_LOGGING

消息：您没有使用二进制日志记录

错误：1382SQLSTATE： （） HY000 ER_RESERVED_SYNTAX

消息：’％s’语法保留用于MySQL服务器内部的目的

错误：1383SQLSTATE： （） HY000 ER_WSAS_FAILED

消息：WSAStartup失败

错误：1384SQLSTATE： （） HY000 ER_DIFF_GROUPS_PROC

消息：不能处理不同组的过程

错误：1385SQLSTATE： （） HY000 ER_NO_GROUP_FOR_PROC

消息：选择必须具有此过程的组

错误：1386SQLSTATE： （） HY000 ER_ORDER_WITH_PROC

消息：不能使用ORDER子句与此过程

错误：1387SQLSTATE： （） HY000 ER_LOGGING_PROHIBIT_CHANGING_OF

消息：二进制日志记录和复制禁止更改全局服务器％s

错误：1388SQLSTATE： （） HY000 ER_NO_FILE_MAPPING

消息：无法映射文件：％s，errno：％d

错误：1389SQLSTATE： （） HY000 ER_WRONG_MAGIC

消息：％s中的魔法错误

错误：1390SQLSTATE： （） HY000 ER_PS_MANY_PARAM

消息：Prepared语句包含太多的占位符

错误：1391SQLSTATE： （） HY000 ER_KEY_PART_0

消息：关键部分’％s’的长度不能为0

错误：1392SQLSTATE： （） HY000 ER_VIEW_CHECKSUM

消息：查看文本校验和失败

错误：1393SQLSTATE： （） HY000 ER_VIEW_MULTIUPDATE

消息：无法通过连接视图’％s。％s’修改多个基表

错误：1394SQLSTATE： （） HY000 ER_VIEW_NO_INSERT_FIELD_LIST

消息：无法插入到没有字段列表的连接视图’％s。％s’中

错误：1395SQLSTATE： （） HY000 ER_VIEW_DELETE_MERGE_VIEW

消息：无法从连接视图’％s。％s’删除

错误：1396SQLSTATE： （） HY000 ER_CANNOT_USER

消息：％s的操作％s失败

错误：1397SQLSTATE： （） XAE04 ER_XAER_NOTA

消息：XAER_NOTA：未知XID

错误：1398SQLSTATE： （） XAE05 ER_XAER_INVAL

消息：XAER_INVAL：参数无效（或不受支持的命令）

错误：1399SQLSTATE： （） XAE07 ER_XAER_RMFAIL

消息：XAER_RMFAIL：当全局事务处于％s状态时，无法执行该命令

错误：1400SQLSTATE： （） XAE09 ER_XAER_OUTSIDE

消息：XAER_OUTSIDE：一些工作是在全球交易之外完成的

错误：1401SQLSTATE： （） XAE03 ER_XAER_RMERR

消息：XAER_RMERR：事务分支中发生致命错误 - 检查数据是否一致

错误：1402SQLSTATE： （） XA100 ER_XA_RBROLLBACK

消息：XA_RBROLLBACK：事务分支已回滚

错误：1403SQLSTATE： （） 42000 ER_NONEXISTING_PROC_GRANT

消息：在例程’％s’上，主机’％s’上的用户’％s’没有定义此类授权

错误：1404SQLSTATE： （） HY000 ER_PROC_AUTO_GRANT_FAIL

消息：无法授予EXECUTE和ALTER ROUTINE权限

错误：1405SQLSTATE： （） HY000 ER_PROC_AUTO_REVOKE_FAIL

消息：无法撤销删除例程的所有权限

错误：1406SQLSTATE： （） 22001 ER_DATA_TOO_LONG

消息：行％ld的列“％s”的数据太长

错误：1407SQLSTATE： （） 42000 ER_SP_BAD_SQLSTATE

消息：错误SQLSTATE：’％s’

错误：1408SQLSTATE： （） HY000 ER_STARTUP

消息：％s：准备连接。版本：’％s’socket：’％s’port：％d％s

错误：1409SQLSTATE： （） HY000 ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR

消息：无法将具有固定大小行的文件的值加载到变量

错误：1410SQLSTATE： （） 42000 ER_CANT_CREATE_USER_WITH_GRANT

消息：您不能使用GRANT创建用户

错误：1411SQLSTATE： （） HY000 ER_WRONG_VALUE_FOR_TYPE

消息：％s值不正确：函数％s的’％s’

错误：1412SQLSTATE： （） HY000 ER_TABLE_DEF_CHANGED

消息：表定义已更改，请重试事务

错误：1413SQLSTATE： （） 42000 ER_SP_DUP_HANDLER

消息：在同一个块中声明的重复处理程序

错误：1414SQLSTATE： （） 42000 ER_SP_NOT_VAR_ARG

消息：OUT或INOUT参数％d用于例程％s不是BEFORE触发器中的变量或NEW伪变量

错误：1415SQLSTATE： （） 0A000 ER_SP_NO_RETSET

消息：不允许从％s返回结果集

错误：1416SQLSTATE： （） 22003 ER_CANT_CREATE_GEOMETRY_OBJECT

消息：无法从发送到几何字段的数据中获取几何对象

错误：1417SQLSTATE： （） HY000 ER_FAILED_ROUTINE_BREAK_BINLOG

消息：例程失败，并且在其声明中既没有SQL也没有READS SQL DATA，并且启用了二进制日志; 如果更新非事务表，则二进制日志将错过其更改

错误：1418SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_ROUTINE

消息：该函数在其声明中没有任何确定，NO SQL或READS SQL DATA，并且启用了二进制日志记录（您可能希望使用较不安全的log_bin_trust_function_creators变量）

错误：1419SQLSTATE： （） HY000 ER_BINLOG_CREATE_ROUTINE_NEED_SUPER

消息：您没有SUPER权限，并且启用了二进制日志记录（您可能*想要使用较不安全的log_bin_trust_function_creators变量）

错误：1420SQLSTATE： （） HY000 ER_EXEC_STMT_WITH_OPEN_CURSOR

消息：您不能执行一个已打开的光标与之关联的准备语句。重置语句以重新执行它。

错误：1421SQLSTATE： （） HY000 ER_STMT_HAS_NO_OPEN_CURSOR

消息：语句（％lu）没有打开游标。

错误：1422SQLSTATE： （） HY000 ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG

消息：存储函数或触发器中不允许显式或隐式提交。

错误：1423SQLSTATE： （） HY000 ER_NO_DEFAULT_FOR_VIEW_FIELD

消息：视图’％s。％s’基础表没有默认值

错误：1424SQLSTATE： （） HY000 ER_SP_NO_RECURSION

消息：不允许递归存储的功能和触发器。

错误：1425SQLSTATE： （） 42000 ER_TOO_BIG_SCALE

消息：列’％s’指定的太大比例％d。最大值为％lu。

错误：1426SQLSTATE： （） 42000 ER_TOO_BIG_PRECISION

消息：’％s’指定的太大精度％d。最大值为％lu。

错误：1427SQLSTATE： （） 42000 ER_M_BIGGER_THAN_D

消息：对于float（M，D），double（M，D）或decimal（M，D），M必须> = D（列’％s’）。

错误：1428SQLSTATE： （） HY000 ER_WRONG_LOCK_OF_SYSTEM_TABLE

消息：您不能将系统表的写锁与其他表或锁类型相结合

错误：1429SQLSTATE： （） HY000 ER_CONNECT_TO_FOREIGN_DATA_SOURCE

消息：无法连接到外部数据源：％s

错误：1430SQLSTATE： （） HY000 ER_QUERY_ON_FOREIGN_DATA_SOURCE

消息：处理外部数据源的查询时出现问题。数据源错误：％s

错误：1431SQLSTATE： （） HY000 ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST

消息：您尝试引用的外部数据源不存在。数据源错误：％s

错误：1432SQLSTATE： （） HY000 ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE

消息：无法创建联合表。数据源连接字符串’％s’的格式不正确

错误：1433SQLSTATE： （） HY000 ER_FOREIGN_DATA_STRING_INVALID

消息：数据源连接字符串’％s’格式不正确

错误：1434SQLSTATE： （） HY000 ER_CANT_CREATE_FEDERATED_TABLE

消息：无法创建联合表。外部数据src错误：％s

错误：1435SQLSTATE： （） HY000 ER_TRG_IN_WRONG_SCHEMA

消息：在错误的模式中触发

错误：1436SQLSTATE： （） HY000 ER_STACK_OVERRUN_NEED_MORE

消息：线程堆栈溢出：％ld字节堆栈使用％ld字节，需要％ld个字节。使用’mysqld –thread_stack =＃’指定一个更大的堆栈。

错误：1437SQLSTATE： （） 42000 ER_TOO_LONG_BODY

消息：’％s’的常规体太长

错误：1438SQLSTATE： （） HY000 ER_WARN_CANT_DROP_DEFAULT_KEYCACHE

消息：无法删除默认密钥

错误：1439SQLSTATE： （） 42000 ER_TOO_BIG_DISPLAYWIDTH

消息：列’％s’的显示宽度超出范围（max =％lu）

错误：1440SQLSTATE： （） XAE08 ER_XAER_DUPID

消息：XAER_DUPID：XID已存在

错误：1441SQLSTATE： （） 22008 ER_DATETIME_FUNCTION_OVERFLOW

消息：日期时间函数：％s字段溢出

错误：1442SQLSTATE： （） HY000 ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG

消息：无法更新存储的函数/触发器中的表’％s’，因为它已经被调用了这个存储的函数/触发器的语句使用。

错误：1443SQLSTATE： （） HY000 ER_VIEW_PREVENT_UPDATE

消息：表’％s’的定义防止在表’％s’上运行％s。

错误：1444SQLSTATE： （） HY000 ER_PS_NO_RECURSION

消息：准备好的语句包含一个存储的例程调用，引用同一个语句。不允许以递归的方式执行一个准备好的语句

错误：1445SQLSTATE： （） HY000 ER_SP_CANT_SET_AUTOCOMMIT

消息：不允许从存储的功能或触发器设置自动提交

错误：1446SQLSTATE： （） HY000 ER_MALFORMED_DEFINER

消息：Definer不完全限定

错误：1447SQLSTATE： （） HY000 ER_VIEW_FRM_NO_USER

消息：查看’％s’。’％s’没有定义信息（旧表格式）。当前用户被用作定义者。请重新创建视图！

错误：1448SQLSTATE： （） HY000 ER_VIEW_OTHER_USER

消息：您需要具有’％s’@’％s’定义者的创建视图的SUPER权限

错误：1449SQLSTATE： （） HY000 ER_NO_SUCH_USER

消息：指定为定义者的用户（’％s’@’％s’）不存在

错误：1450SQLSTATE： （） HY000 ER_FORBID_SCHEMA_CHANGE

消息：将模式从“％s”更改为“％s”是不允许的。

错误：1451SQLSTATE： （） 23000 ER_ROW_IS_REFERENCED_2

消息：无法删除或更新父行：外键约束失败（％s）

错误：1452SQLSTATE： （） 23000 ER_NO_REFERENCED_ROW_2

消息：无法添加或更新子行：外键约束失败（％s）

错误：1453SQLSTATE： （） 42000 ER_SP_BAD_VAR_SHADOW

消息：变量’％s’必须用...引用，或者重命名

错误：1454SQLSTATE： （） HY000 ER_TRG_NO_DEFINER

消息：触发器’％s’没有定义属性’％s’。触发器将在调用者的授权下激活，这可能没有足够的权限。请重新创建触发器。

错误：1455SQLSTATE： （） HY000 ER_OLD_FILE_FORMAT

消息：’％s’具有旧格式，您应该重新创建’％s’对象

错误：1456SQLSTATE： （） HY000 ER_SP_RECURSION_LIMIT

消息：常规％s超出递归极限％d（由max_sp_recursion_depth变量设置）

错误：1457SQLSTATE： （） HY000 ER_SP_PROC_TABLE_CORRUPT

消息：无法加载例程％s。表mysql.proc丢失，损坏或包含不良数据（内部代码％d）

错误：1458SQLSTATE： （） 42000 ER_SP_WRONG_NAME

消息：常规名称不正确’％s’

错误：1459SQLSTATE： （） HY000 ER_TABLE_NEEDS_UPGRADE

消息：需要表格升级。请执行“修复表’％s”或转储/重新加载修复它！

错误：1460SQLSTATE： （） 42000 ER_SP_NO_AGGREGATE

消息：存储函数不支持AGGREGATE

错误：1461SQLSTATE： （） 42000 ER_MAX_PREPARED_STMT_COUNT_REACHED

消息：无法创建超过max_prepared_stmt_count语句（当前值：％lu）

错误：1462SQLSTATE： （） HY000 ER_VIEW_RECURSIVE

消息：％s```％s包含视图递归

错误：1463SQLSTATE： （） 42000 ER_NON_GROUPING_FIELD_USED

消息：在％s子句中使用非分组字段’％s’

错误：1464SQLSTATE： （） HY000 ER_TABLE_CANT_HANDLE_SPKEYS

消息：used表类型不支持SPATIAL索引

错误：1465SQLSTATE： （） HY000 ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA

消息：无法在系统表上创建触发器

错误：1466SQLSTATE： （） HY000 ER_REMOVED_SPACES

消息：前导空格从名称’％s’中删除

错误：1467SQLSTATE： （） HY000 ER_AUTOINC_READ_FAILED

消息：无法从存储引擎读取自动增量值

错误：1468SQLSTATE： （） HY000 ER_USERNAME

消息：用户名

错误：1469SQLSTATE： （） HY000 ER_HOSTNAME

消息：主机名

错误：1470SQLSTATE： （） HY000 ER_WRONG_STRING_LENGTH

消息：字符串’％s’对于％s太长（不应超过％d）

错误：1471SQLSTATE： （） HY000 ER_NON_INSERTABLE_TABLE

消息：％s的目标表％s不可插入

错误：1472SQLSTATE： （） HY000 ER_ADMIN_WRONG_MRG_TABLE

消息：表’％s’是不同的定义或非MyISAM类型或不存在

错误：1473SQLSTATE： （） HY000 ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT

消息：选择太高的嵌套级别

错误：1474SQLSTATE： （） HY000 ER_NAME_BECOMES_EMPTY

消息：名称’％s’已成为”

错误：1475SQLSTATE： （） HY000 ER_AMBIGUOUS_FIELD_TERM

消息：FIELDS TERMINATED字符串的第一个字符是不明确的; 请使用非可选和不为空的FIELDS ENCLOSED BY

错误：1476SQLSTATE： （） HY000 ER_FOREIGN_SERVER_EXISTS

消息：您正在尝试创建的外部服务器％s已经存在。

错误：1477SQLSTATE： （） HY000 ER_FOREIGN_SERVER_DOESNT_EXIST

消息：您尝试引用的外部服务器名称不存在。数据源错误：％s

错误：1478SQLSTATE： （） HY000 ER_ILLEGAL_HA_CREATE_OPTION

消息：表存储引擎’％s’不支持创建选项’％s’

错误：1479SQLSTATE： （） HY000 ER_PARTITION_REQUIRES_VALUES_ERROR

消息：语法错误：％s PARTITIONING需要为每个分区定义VALUES％s

错误：1480SQLSTATE： （） HY000 ER_PARTITION_WRONG_VALUES_ERROR

消息：只有％s PARTITIONING可以在分区定义中使用VALUES％s

错误：1481SQLSTATE： （） HY000 ER_PARTITION_MAXVALUE_ERROR

消息：MAXVALUE只能在最后一个分区定义中使用

错误：1482SQLSTATE： （） HY000 ER_PARTITION_SUBPARTITION_ERROR

消息：子分区只能是哈希分区和按键

错误：1483SQLSTATE： （） HY000 ER_PARTITION_SUBPART_MIX_ERROR

消息：如果在一个分区上，则必须在所有分区上定义子分区

错误：1484SQLSTATE： （） HY000 ER_PARTITION_WRONG_NO_PART_ERROR

消息：定义的分区数量错误，与以前的设置不匹配

错误：1485SQLSTATE： （） HY000 ER_PARTITION_WRONG_NO_SUBPART_ERROR

消息：定义的子分区数量错误，与以前的设置不匹配

错误：1486SQLSTATE： （） HY000 ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR

消息：不允许（子）分区功能中的常量，随机或时区相关表达式

错误：1487SQLSTATE： （） HY000 ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR

消息：RANGE / LIST VALUES中的表达式必须是常数

错误：1488SQLSTATE： （） HY000 ER_FIELD_NOT_FOUND_PART_ERROR

消息：表中未找到分区功能的字段列表中的字段

错误：1489SQLSTATE： （） HY000 ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR

消息：只能在KEY分区中列出字段列表

错误：1490SQLSTATE： （） HY000 ER_INCONSISTENT_PARTITION_INFO_ERROR

消息：frm文件中的分区信息与可以写入frm文件的内容不符

错误：1491SQLSTATE： （） HY000 ER_PARTITION_FUNC_NOT_ALLOWED_ERROR

消息：％s函数返回错误的类型

错误：1492SQLSTATE： （） HY000 ER_PARTITIONS_MUST_BE_DEFINED_ERROR

消息：对于％s分区，必须定义每个分区

错误：1493SQLSTATE： （） HY000 ER_RANGE_NOT_INCREASING_ERROR

消息：VALUES LESS THAN每个分区的值必须严格增加

错误：1494SQLSTATE： （） HY000 ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR

消息：VALUES值必须与分区函数的类型相同

错误：1495SQLSTATE： （） HY000 ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR

消息：列表分区中多个定义相同的常量

错误：1496SQLSTATE： （） HY000 ER_PARTITION_ENTRY_ERROR

消息：分区不能在查询中单独使用

错误：1497SQLSTATE： （） HY000 ER_MIX_HANDLER_ERROR

消息：在此版本的MySQL中，不允许在分区中处理程序的混合

错误：1498SQLSTATE： （） HY000 ER_PARTITION_NOT_DEFINED_ERROR

消息：对于分区引擎，需要定义所有的％s

错误：1499SQLSTATE： （） HY000 ER_TOO_MANY_PARTITIONS_ERROR

消息：定义了太多的分区（包括子分区）

错误：1500SQLSTATE： （） HY000 ER_SUBPARTITION_ERROR

消息：只能将RANGE / LIST分区与HASH / KEY分区混合进行子分区

错误：1501SQLSTATE： （） HY000 ER_CANT_CREATE_HANDLER_FILE

消息：无法创建特定的处理程序文件

错误：1502SQLSTATE： （） HY000 ER_BLOB_FIELD_IN_PART_FUNC_ERROR

消息：分区函数中不允许有BLOB字段

错误：1503SQLSTATE： （） HY000 ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF

消息：％s必须包括表的分区功能中的所有列

错误：1504SQLSTATE： （） HY000 ER_NO_PARTS_ERROR

消息：％s = 0的数量不是允许的值

错误：1505SQLSTATE： （） HY000 ER_PARTITION_MGMT_ON_NONPARTITIONED

消息：未分区表上的分区管理是不可能的

错误：1506SQLSTATE： （） HY000 ER_FOREIGN_KEY_ON_PARTITIONED

消息：外键不支持与分区配合使用

错误：1507SQLSTATE： （） HY000 ER_DROP_PARTITION_NON_EXISTENT

消息：分区列表中的％s错误

错误：1508SQLSTATE： （） HY000 ER_DROP_LAST_PARTITION

消息：无法删除所有分区，请改用DROP TABLE

错误：1509SQLSTATE： （） HY000 ER_COALESCE_ONLY_ON_HASH_PARTITION

消息：COALESCE PARTITION只能在HASH / KEY分区上使用

错误：1510SQLSTATE： （） HY000 ER_REORG_HASH_ONLY_ON_SAME_NO

消息：REORGANIZE PARTITION只能用于重新组织分区，不更改其数字

错误：1511SQLSTATE： （） HY000 ER_REORG_NO_PARAM_ERROR

消息：无参数的REORGANIZE PARTITION只能在使用HASH PARTITION的自动分区表上使用

错误：1512SQLSTATE： （） HY000 ER_ONLY_ON_RANGE_LIST_PARTITION

消息：％s PARTITION只能在RANGE / LIST分区上使用

错误：1513SQLSTATE： （） HY000 ER_ADD_PARTITION_SUBPART_ERROR

消息：尝试添加具有错误子分区数量的分区

错误：1514SQLSTATE： （） HY000 ER_ADD_PARTITION_NO_NEW_PARTITION

消息：必须至少添加一个分区

错误：1515SQLSTATE： （） HY000 ER_COALESCE_PARTITION_NO_PARTITION

消息：至少必须合并一个分区

错误：1516SQLSTATE： （） HY000 ER_REORG_PARTITION_NOT_EXIST

消息：更多的分区要重组，而不是分区

错误：1517SQLSTATE： （） HY000 ER_SAME_NAME_PARTITION

消息：重复的分区名称％s

错误：1518SQLSTATE： （） HY000 ER_NO_BINLOG_ERROR

消息：不允许在此命令上关闭binlog

错误：1519SQLSTATE： （） HY000 ER_CONSECUTIVE_REORG_PARTITIONS

消息：当重组一组分区时，它们必须是连续的顺序

错误：1520SQLSTATE： （） HY000 ER_REORG_OUTSIDE_RANGE

消息：重新组织范围分区不能更改总范围，除了可以扩展范围的最后一个分区

错误：1521SQLSTATE： （） HY000 ER_PARTITION_FUNCTION_FAILURE

消息：此处理程序的此版本不支持分区功能

错误：1522SQLSTATE： （） HY000 ER_PART_STATE_ERROR

消息：无法从CREATE / ALTER TABLE定义分区状态

错误：1523SQLSTATE： （） HY000 ER_LIMITED_PART_RANGE

消息：％s处理程序仅支持VALUES中的32位整数

错误：1524SQLSTATE： （） HY000 ER_PLUGIN_IS_NOT_LOADED

消息：插件’％s’未加载

错误：1525SQLSTATE： （） HY000 ER_WRONG_VALUE

消息：％s值不正确：’％s’

错误：1526SQLSTATE： （） HY000 ER_NO_PARTITION_FOR_GIVEN_VALUE

消息：表没有值％s的分区

错误：1527SQLSTATE： （） HY000 ER_FILEGROUP_OPTION_ONLY_ONCE

消息：不允许多次指定％s

错误：1528SQLSTATE： （） HY000 ER_CREATE_FILEGROUP_FAILED

消息：无法创建％s

错误：1529SQLSTATE： （） HY000 ER_DROP_FILEGROUP_FAILED

消息：无法删除％s

错误：1530SQLSTATE： （） HY000 ER_TABLESPACE_AUTO_EXTEND_ERROR

消息：处理程序不支持表空间的自动扩展

错误：1531SQLSTATE： （） HY000 ER_WRONG_SIZE_NUMBER

消息：大小参数未正确指定，无论是编号还是表单10M

错误：1532SQLSTATE： （） HY000 ER_SIZE_OVERFLOW_ERROR

消息：尺寸号是正确的，但我们不允许数字部分超过20亿

错误：1533SQLSTATE： （） HY000 ER_ALTER_FILEGROUP_FAILED

消息：无法更改：％s

错误：1534SQLSTATE： （） HY000 ER_BINLOG_ROW_LOGGING_FAILED

消息：将一行写入基于行的二进制日志失败

错误：1535SQLSTATE： （） HY000 ER_BINLOG_ROW_WRONG_TABLE_DEF

消息：主站和从站上的表定义不匹配：％s

错误：1536SQLSTATE： （） HY000 ER_BINLOG_ROW_RBR_TO_SBR

消息：使用–log-slave更新运行的从站必须使用基于行的二进制日志记录才能复制基于行的二进制日志事件

错误：1537SQLSTATE： （） HY000 ER_EVENT_ALREADY_EXISTS

消息：事件’％s’已经存在

错误：1538SQLSTATE： （） HY000 ER_EVENT_STORE_FAILED

消息：无法存储事件％s。来自存储引擎的错误代码％d。

错误：1539SQLSTATE： （） HY000 ER_EVENT_DOES_NOT_EXIST

消息：未知事件’％s’

错误：1540SQLSTATE： （） HY000 ER_EVENT_CANT_ALTER

消息：无法更改事件’％s’

错误：1541SQLSTATE： （） HY000 ER_EVENT_DROP_FAILED

消息：无法删除％s

错误：1542SQLSTATE： （） HY000 ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG

消息：INTERVAL不是积极的或太大的

错误：1543SQLSTATE： （） HY000 ER_EVENT_ENDS_BEFORE_STARTS

消息：ENDS无效或STARTS之前

错误：1544SQLSTATE： （） HY000 ER_EVENT_EXEC_TIME_IN_THE_PAST

消息：事件执行时间在过去。事件已被禁用

错误：1545SQLSTATE： （） HY000 ER_EVENT_OPEN_TABLE_FAILED

消息：无法打开mysql.event

错误：1546SQLSTATE： （） HY000 ER_EVENT_NEITHER_M_EXPR_NOR_M_AT

消息：没有提供datetime表达式

错误：1547SQLSTATE： （） HY000 ER_OBSOLETE_COL_COUNT_DOESNT_MATCH_CORRUPTED

消息：mysql的列数％s是错的。预期％d，发现％d。表可能已损坏

错误：1548SQLSTATE： （） HY000 ER_OBSOLETE_CANNOT_LOAD_FROM_TABLE

消息：无法从mysql加载。表可能已损坏

错误：1549SQLSTATE： （） HY000 ER_EVENT_CANNOT_DELETE

消息：无法从mysql.event中删除事件

错误：1550SQLSTATE： （） HY000 ER_EVENT_COMPILE_ERROR

消息：在编辑事件的正文时出错

错误：1551SQLSTATE： （） HY000 ER_EVENT_SAME_NAME

消息：相同的新旧事件名称

错误：1552SQLSTATE： （） HY000 ER_EVENT_DATA_TOO_LONG

消息：“％s”列的数据太长

错误：1553SQLSTATE： （） HY000 ER_DROP_INDEX_FK

消息：无法删除索引“％s”：外键约束中需要

InnoDB 当您尝试删除可以强制执行特定参照约束的最后一个索引时，会报告此错误。

对于DML语句的最佳性能， InnoDB需要一个索引上存在 外键列，所以UPDATE和DELETE 操作上的父表可以很容易地检查在是否存在相应的行子表。MySQL的创建或在需要时自动下降这样的索引，作为副作用CREATE TABLE， CREATE INDEX和 ALTER TABLE语句。

删除索引时，InnoDB检查索引是否用于检查外键约束。如果存在可用于强制执行相同约束的另一个索引，则删除索引仍然可以。阻止您丢弃可以强制执行特定参照约束的最后一个索引。InnoDB

错误：1554SQLSTATE： （） HY000 ER_WARN_DEPRECATED_SYNTAX_WITH_VER

消息：语法’％s’已被弃用，将在MySQL％s中删除。请改用％s

错误：1555SQLSTATE： （） HY000 ER_CANT_WRITE_LOCK_LOG_TABLE

消息：您不能写锁定日志表。只能读取访问权限

错误：1556SQLSTATE： （） HY000 ER_CANT_LOCK_LOG_TABLE

消息：您不能使用具有日志表的锁。

错误：1557SQLSTATE： （） 23000 ER_FOREIGN_DUPLICATE_KEY_OLD_UNUSED

消息：维护表’％s’的外键约束，条目’％s’，键％d将导致重复条目

错误：1558SQLSTATE： （） HY000 ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE

消息：mysql的列数％s是错的。预期％d，发现％d。创建与MySQL％d，现在运行％d。请使用mysql_upgrade来解决这个错误。

错误：1559SQLSTATE： （） HY000 ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR

消息：当会话已打开临时表时，不能切换出基于行的二进制日志格式

错误：1560SQLSTATE： （） HY000 ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT

消息：无法更改存储的功能或触发器内的二进制日志格式

错误：1561SQLSTATE： （） HY000 ER_NDB_CANT_SWITCH_BINLOG_FORMAT

消息：NDB群集引擎不支持即时更改binlog格式

错误：1562SQLSTATE： （） HY000 ER_PARTITION_NO_TEMPORARY

消息：无法使用分区创建临时表

错误：1563SQLSTATE： （） HY000 ER_PARTITION_CONST_DOMAIN_ERROR

消息：分区常数超出分区函数域

错误：1564SQLSTATE： （） HY000 ER_PARTITION_FUNCTION_IS_NOT_ALLOWED

消息：不允许此分区功能

错误：1565SQLSTATE： （） HY000 ER_DDL_LOG_ERROR

消息：DDL日志中出错

错误：1566SQLSTATE： （） HY000 ER_NULL_IN_VALUES_LESS_THAN

消息：不允许在VALUES LESS THAN中使用NULL值

错误：1567SQLSTATE： （） HY000 ER_WRONG_PARTITION_NAME

消息：分区名称不正确

错误：1568SQLSTATE： （） 25001 ER_CANT_CHANGE_TX_CHARACTERISTICS

消息：事务处理中不能更改事务特征

错误：1569SQLSTATE： （） HY000 ER_DUP_ENTRY_AUTOINCREMENT_CASE

消息：ALTER TABLE导致auto_increment重新排序，导致关键字’％s’的重复条目’％s’

错误：1570SQLSTATE： （） HY000 ER_EVENT_MODIFY_QUEUE_ERROR

消息：内部调度程序错误％d

错误：1571SQLSTATE： （） HY000 ER_EVENT_SET_VAR_ERROR

消息：调度程序启动/停止时出错。错误代码％u

错误：1572SQLSTATE： （） HY000 ER_PARTITION_MERGE_ERROR

消息：引擎不能在分区表中使用

错误：1573SQLSTATE： （） HY000 ER_CANT_ACTIVATE_LOG

消息：无法激活’％s’日志

错误：1574SQLSTATE： （） HY000 ER_RBR_NOT_AVAILABLE

消息：服务器未使用基于行的复制构建

错误：1575SQLSTATE： （） HY000 ER_BASE64_DECODE_ERROR

消息：解码base64字符串失败

错误：1576SQLSTATE： （） HY000 ER_EVENT_RECURSION_FORBIDDEN

消息：当身体存在时，EVENT DDL语句的递归被禁止

错误：1577SQLSTATE： （） HY000 ER_EVENTS_DB_ERROR

消息：无法继续进行，因为事件计划程序使用的系统表在服务器启动时被发现损坏

要解决此问题，请尝试运行 mysql_upgrade。

错误：1578SQLSTATE： （） HY000 ER_ONLY_INTEGERS_ALLOWED

消息：只允许使用整数作为号码

错误：1579SQLSTATE： （） HY000 ER_UNSUPORTED_LOG_ENGINE

消息：此存储引擎不能用于日志表“

错误：1580SQLSTATE： （） HY000 ER_BAD_LOG_STATEMENT

消息：如果启用日志记录，则不能“％s”日志表

错误：1581SQLSTATE： （） HY000 ER_CANT_RENAME_LOG_TABLE

消息：无法重命名’％s’。启用日志记录时，重命名/从日志表必须重命名两个表：日志表到归档表，另一个表返回’％s’

错误：1582SQLSTATE： （） 42000 ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT

消息：调用本地函数’％s’时参数计数不正确

错误：1583SQLSTATE： （） 42000 ER_WRONG_PARAMETERS_TO_NATIVE_FCT

消息：调用本机函数’％s’时参数不正确

错误：1584SQLSTATE： （） 42000 ER_WRONG_PARAMETERS_TO_STORED_FCT

消息：调用存储函数％s时参数不正确

错误：1585SQLSTATE： （） HY000 ER_NATIVE_FCT_NAME_COLLISION

消息：此函数’％s’与本机函数具有相同的名称

错误：1586SQLSTATE： （） 23000 ER_DUP_ENTRY_WITH_KEY_NAME

消息：键’％s’的重复条目’％s’

此错误的格式字符串也与 ER_DUP_ENTRY。

错误：1587SQLSTATE： （） HY000 ER_BINLOG_PURGE_EMFILE

消息：打开的文件太多，请再次执行该命令

错误：1588SQLSTATE： （） HY000 ER_EVENT_CANNOT_CREATE_IN_THE_PAST

消息：事件执行时间过去和ON完成NOT PRESERVE已设置。事件在创建后立即下降。

错误：1589SQLSTATE： （） HY000 ER_EVENT_CANNOT_ALTER_IN_THE_PAST

消息：事件执行时间过去和ON完成NOT PRESERVE已设置。事件没有改变。指定将来的时间。

错误：1590SQLSTATE： （） HY000 ER_SLAVE_INCIDENT

消息：主人发生事件％s。消息：％s

错误：1591SQLSTATE： （） HY000 ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT

消息：表没有某些现有值的分区

错误：1592SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_STATEMENT

消息：自BINLOG_FORMAT = STATEMENT以来，使用语句格式写入二进制日志的Unsafe语句。％S

错误：1593SQLSTATE： （） HY000 ER_SLAVE_FATAL_ERROR

消息：致命错误：％s

错误：1594SQLSTATE： （） HY000 ER_SLAVE_RELAY_LOG_READ_FAILURE

消息：中继日志读取失败：％s

错误：1595SQLSTATE： （） HY000 ER_SLAVE_RELAY_LOG_WRITE_FAILURE

消息：中继日志写入失败：％s

错误：1596SQLSTATE： （） HY000 ER_SLAVE_CREATE_EVENT_FAILURE

消息：无法创建％s

错误：1597SQLSTATE： （） HY000 ER_SLAVE_MASTER_COM_FAILURE

消息：主命令％s失败：％s

错误：1598SQLSTATE： （） HY000 ER_BINLOG_LOGGING_IMPOSSIBLE

消息：二进制日志不可能。消息：％s

错误：1599SQLSTATE： （） HY000 ER_VIEW_NO_CREATION_CTX

消息：查看`％s“`％s没有创建上下文

错误：1600SQLSTATE： （） HY000 ER_VIEW_INVALID_CREATION_CTX

消息：视图’％s.％s’的创建上下文无效

错误：1601SQLSTATE： （） HY000 ER_SR_INVALID_CREATION_CTX

消息：存储例程’％s.％s`的创建上下文无效

错误：1602SQLSTATE： （） HY000 ER_TRG_CORRUPTED_FILE

消息：表’％s.％s`损坏的TRG文件

错误：1603SQLSTATE： （） HY000 ER_TRG_NO_CREATION_CTX

消息：表’％s.％s’的触发器没有创建上下文

错误：1604SQLSTATE： （） HY000 ER_TRG_INVALID_CREATION_CTX

消息：表’％s.％s`的触发器创建上下文无效

错误：1605SQLSTATE： （） HY000 ER_EVENT_INVALID_CREATION_CTX

消息：事件’％s.％s`的创建上下文无效

错误：1606SQLSTATE： （） HY000 ER_TRG_CANT_OPEN_TABLE

消息：无法打开表来触发％s```％s

错误：1607SQLSTATE： （） HY000 ER_CANT_CREATE_SROUTINE

消息：无法创建存储例程％s。检查警告

错误：1608SQLSTATE： （） HY000 ER_NEVER_USED

消息：模糊的从属模式组合。％S

错误：1609SQLSTATE： （） HY000 ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT

消息：类型“％s”的BINLOG语句之前没有格式描述BINLOG语句。

错误：1610SQLSTATE： （） HY000 ER_SLAVE_CORRUPT_EVENT

消息：检测到损坏的复制事件

错误：1611SQLSTATE： （） HY000 ER_LOAD_DATA_INVALID_COLUMN

消息：LOAD DATA中的列参考无效（％s）

ER_LOAD_DATA_INVALID_COLUMN 5.7.7后被移除。

错误：1611SQLSTATE： （） HY000 ER_LOAD_DATA_INVALID_COLUMN_UNUSED

消息：LOAD DATA中的列参考无效（％s）

ER_LOAD_DATA_INVALID_COLUMN_UNUSED 在5.7.8中加了。

错误：1612SQLSTATE： （） HY000 ER_LOG_PURGE_NO_FILE

消息：没有找到被清除的日志％s

错误：1613SQLSTATE： （） XA106 ER_XA_RBTIMEOUT

消息：XA_RBTIMEOUT：事务分支回滚：花费的时间太长

错误：1614SQLSTATE： （） XA102 ER_XA_RBDEADLOCK

消息：XA_RBDEADLOCK：事务分支已回滚：检测到死锁

错误：1615SQLSTATE： （） HY000 ER_NEED_REPREPARE

消息：准备的声明需要重新准备

错误：1616SQLSTATE： （） HY000 ER_DELAYED_NOT_SUPPORTED

消息：表’％s’不支持DELAYED选项

错误：1617SQLSTATE： （） HY000 WARN_NO_MASTER_INFO

消息：主信息结构不存在

错误：1618SQLSTATE： （） HY000 WARN_OPTION_IGNORED

消息：忽略<％s>选项

错误：1619SQLSTATE： （） HY000 WARN_PLUGIN_DELETE_BUILTIN

消息：内置插件无法删除

WARN_PLUGIN_DELETE_BUILTIN 在5.7.4之后被去除。

错误：1619SQLSTATE： （） HY000 ER_PLUGIN_DELETE_BUILTIN

消息：内置插件无法删除

ER_PLUGIN_DELETE_BUILTIN 加入5.7.5。

错误：1620SQLSTATE： （） HY000 WARN_PLUGIN_BUSY

消息：插件正忙，将在关机时卸载

错误：1621SQLSTATE： （） HY000 ER_VARIABLE_IS_READONLY

消息：％s变量’％s’是只读的。使用SET％s分配值

错误：1622SQLSTATE： （） HY000 ER_WARN_ENGINE_TRANSACTION_ROLLBACK

消息：存储引擎％s不支持此语句的回滚。事务回滚，必须重新启动

错误：1623SQLSTATE： （） HY000 ER_SLAVE_HEARTBEAT_FAILURE

消息：意外的主控心跳数据：％s

错误：1624SQLSTATE： （） HY000 ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE

消息：心跳周期的请求值为负值或超过允许的最大值（％s秒）。

错误：1625SQLSTATE： （） HY000 ER_NDB_REPLICATION_SCHEMA_ERROR

消息：mysql.ndb_replication表的模式不正确。消息：％s

错误：1626SQLSTATE： （） HY000 ER_CONFLICT_FN_PARSE_ERROR

消息：解析冲突函数时出错。消息：％s

错误：1627SQLSTATE： （） HY000 ER_EXCEPTIONS_WRITE_ERROR

消息：写入异常表失败。讯息：％s“

错误：1628SQLSTATE： （） HY000 ER_TOO_LONG_TABLE_COMMENT

消息：表’％s’的评论太长（max =％lu）

错误：1629SQLSTATE： （） HY000 ER_TOO_LONG_FIELD_COMMENT

消息：字段’％s’的注释太长（max =％lu）

错误：1630SQLSTATE： （） 42000 ER_FUNC_INEXISTENT_NAME_COLLISION

消息：FUNCTION％s不存在。请参阅“参考手册”中的“功能名称解析和解析”部分

错误：1631SQLSTATE： （） HY000 ER_DATABASE_NAME

消息：数据库

错误：1632SQLSTATE： （） HY000 ER_TABLE_NAME

消息：表

错误：1633SQLSTATE： （） HY000 ER_PARTITION_NAME

消息：分区

错误：1634SQLSTATE： （） HY000 ER_SUBPARTITION_NAME

消息：子分区

错误：1635SQLSTATE： （） HY000 ER_TEMPORARY_NAME

消息：临时

错误：1636SQLSTATE： （） HY000 ER_RENAMED_NAME

消息：重命名

错误：1637SQLSTATE： （） HY000 ER_TOO_MANY_CONCURRENT_TRXS

消息：活动并发事务太多

错误：1638SQLSTATE： （） HY000 WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED

消息：不完全支持非ASCII分隔符参数

错误：1639SQLSTATE： （） HY000 ER_DEBUG_SYNC_TIMEOUT

消息：调试同步点等待超时

错误：1640SQLSTATE： （） HY000 ER_DEBUG_SYNC_HIT_LIMIT

消息：达到调试同步点命中限制

错误：1641SQLSTATE： （） 42000 ER_DUP_SIGNAL_SET

消息：重复条件信息项’％s’

错误：1642SQLSTATE： （） 01000 ER_SIGNAL_WARN

消息：未处理的用户定义的警告条件

错误：1643SQLSTATE： （） 02000 ER_SIGNAL_NOT_FOUND

消息：未处理的用户定义的未找到的条件

错误：1644SQLSTATE： （） HY000 ER_SIGNAL_EXCEPTION

消息：未处理的用户定义的异常情况

错误：1645SQLSTATE： （） 0K000 ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER

消息：当处理程序不活动时，RESIGNAL

错误：1646SQLSTATE： （） HY000 ER_SIGNAL_BAD_CONDITION_TYPE

消息：SIGNAL / RESIGNAL只能使用SQLSTATE定义的CONDITION

错误：1647SQLSTATE： （） HY000 WARN_COND_ITEM_TRUNCATED

消息：条件项’％s’的数据被截断

错误：1648SQLSTATE： （） HY000 ER_COND_ITEM_TOO_LONG

消息：条件项’％s’的数据太长

错误：1649SQLSTATE： （） HY000 ER_UNKNOWN_LOCALE

消息：未知的区域设置：’％s’

错误：1650SQLSTATE： （） HY000 ER_SLAVE_IGNORE_SERVER_IDS

消息：请求的服务器ID％d与从启动选项–replicate-same-server-id冲突

错误：1651SQLSTATE： （） HY000 ER_QUERY_CACHE_DISABLED

消息：查询缓存已禁用; 使用query_cache_type = 1重新启动服务器以启用它

错误：1652SQLSTATE： （） HY000 ER_SAME_NAME_PARTITION_FIELD

消息：重复的分区字段名称’％s’

错误：1653SQLSTATE： （） HY000 ER_PARTITION_COLUMN_LIST_ERROR

消息：使用分区列列表不一致

错误：1654SQLSTATE： （） HY000 ER_WRONG_TYPE_COLUMN_VALUE_ERROR

消息：分区列错误类型的值

错误：1655SQLSTATE： （） HY000 ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR

消息：’％s’中的字段太多

错误：1656SQLSTATE： （） HY000 ER_MAXVALUE_IN_VALUES_IN

消息：不能使用MAXVALUE作为VALUES IN中的值

错误：1657SQLSTATE： （） HY000 ER_TOO_MANY_VALUES_ERROR

消息：此类型的％s分区不能有多个值

错误：1658SQLSTATE： （） HY000 ER_ROW_SINGLE_PARTITION_FIELD_ERROR

消息：VALUES IN中的行表达式仅允许进行多字段列分区

错误：1659SQLSTATE： （） HY000 ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD

消息：对于此类型的分区，字段’％s’是不允许的类型

错误：1660SQLSTATE： （） HY000 ER_PARTITION_FIELDS_TOO_LONG

消息：分区字段的总长度太大

错误：1661SQLSTATE： （） HY000 ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE

消息：无法执行语句：不可能写入二进制日志，因为这两个无行为能力的引擎和无法声明的引擎都涉及到。

错误：1662SQLSTATE： （） HY000 ER_BINLOG_ROW_MODE_AND_STMT_ENGINE

消息：无法执行语句：不能写入二进制日志，因为BINLOG_FORMAT = ROW，并且至少有一个表使用限于基于语句的日志记录的存储引擎。

错误：1663SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_AND_STMT_ENGINE

消息：无法执行语句：不可能写入二进制日志，因为语句不安全，存储引擎仅限于基于语句的日志记录，而BINLOG_FORMAT = MIXED。％S

错误：1664SQLSTATE： （） HY000 ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE

消息：无法执行语句：不可能写入二进制日志，因为语句是行格式，至少有一个表使用限于基于语句的日志记录的存储引擎。

错误：1665SQLSTATE： （） HY000 ER_BINLOG_STMT_MODE_AND_ROW_ENGINE

消息：无法执行语句：BINLOG_FORMAT = STATEMENT不可能写入二进制日志，并且至少有一个表使用限于基于行记录的存储引擎。％s

错误：1666SQLSTATE： （） HY000 ER_BINLOG_ROW_INJECTION_AND_STMT_MODE

消息：无法执行语句：不可能写入二进制日志，因为语句是行格式和BINLOG_FORMAT = STATEMENT。

错误：1667SQLSTATE： （） HY000 ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE

消息：无法执行语句：不可能写入二进制日志，因为涉及多个引擎并且至少有一个引擎是自我记录的。

错误：1668SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_LIMIT

消息：语句不安全，因为它使用LIMIT子句。这是不安全的，因为不能预测包含的一组行。

错误：1669SQLSTATE： （） HY000 ER_UNUSED4

消息：该语句是不安全的，因为它使用INSERT DELAYED。这是不安全的，因为不能预测行插入的时间。

错误：1670SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_SYSTEM_TABLE

消息：该语句不安全，因为它使用常规日志，慢查询日志或performance_schema表。这是不安全的，因为系统表在从站上可能有所不同。

错误：1671SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_AUTOINC_COLUMNS

消息：语句不安全，因为它调用触发器或存储的函数插入到AUTO_INCREMENT列中。插入的值无法正确记录。

错误：1672SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_UDF

消息：语句不安全，因为它使用的UDF可能不会在从站上返回相同的值。

错误：1673SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_SYSTEM_VARIABLE

消息：语句不安全，因为它使用在从属上可能具有不同值的系统变量。

错误：1674SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_SYSTEM_FUNCTION

消息：语句不安全，因为它使用可能在从站上返回不同值的系统函数。

错误：1675SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS

消息：语句不安全，因为它在访问同一事务中的事务表之前访问非事务表。

错误：1676SQLSTATE： （） HY000 ER_MESSAGE_AND_STATEMENT

消息：％s声明：％s

错误：1677SQLSTATE： （） HY000 ER_SLAVE_CONVERSION_FAILED

消息：表’％s。％s’的列％d不能从类型’％s’转换为类型’％s’

错误：1678SQLSTATE： （） HY000 ER_SLAVE_CANT_CREATE_CONVERSION

消息：无法为表’％s。％s’创建转换表

错误：1679SQLSTATE： （） HY000 ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT

消息：无法在事务中修改@@ session.binlog_format

错误：1680SQLSTATE： （） HY000 ER_PATH_LENGTH

消息：为％s指定的路径太长。

错误：1681SQLSTATE： （） HY000 ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT

消息：’％s’已被弃用，将在以后的版本中被删除。

错误：1682SQLSTATE： （） HY000 ER_WRONG_NATIVE_TABLE_STRUCTURE

消息：本机表’％s’。’％s’的结构错误

错误：1683SQLSTATE： （） HY000 ER_WRONG_PERFSCHEMA_USAGE

消息：performance_schema使用无效。

错误：1684SQLSTATE： （） HY000 ER_WARN_I_S_SKIPPED_TABLE

消息：表’％s’。’％s’被跳过，因为它的定义被并发的DDL语句修改

错误：1685SQLSTATE： （） HY000 ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT

消息：无法在事务中修改@@ session.binlog_direct_non_transactional_updates

错误：1686SQLSTATE： （） HY000 ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT

消息：无法更改存储的功能或触发器中的binlog直接标志

错误：1687SQLSTATE： （） 42000 ER_SPATIAL_MUST_HAVE_GEOM_COL

消息：空间索引可能只包含几何类型列

错误：1688SQLSTATE： （） HY000 ER_TOO_LONG_INDEX_COMMENT

消息：索引’％s’的注释太长（max =％lu）

错误：1689SQLSTATE： （） HY000 ER_LOCK_ABORTED

消息：由于挂起的独占锁，等待锁被中止

错误：1690SQLSTATE： （） 22003 ER_DATA_OUT_OF_RANGE

消息：％s超出范围在’％s’

错误：1691SQLSTATE： （） HY000 ER_WRONG_SPVAR_TYPE_IN_LIMIT

消息：LIMIT子句中基于非整数的类型的变量

错误：1692SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE

消息：在语句中混合自我记录和非自动记录引擎是不安全的。

错误：1693SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_MIXED_STATEMENT

消息：语句访问非事务表以及事务或临时表，并写入其中任何一个。

错误：1694SQLSTATE： （） HY000 ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN

消息：无法在事务中修改@@ session.sql_log_bin

错误：1695SQLSTATE： （） HY000 ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN

消息：无法更改存储的函数或触发器中的sql_log_bin

错误：1696SQLSTATE： （） HY000 ER_FAILED_READ_FROM_PAR_FILE

消息：无法从.par文件读取

错误：1697SQLSTATE： （） HY000 ER_VALUES_IS_NOT_INT_TYPE_ERROR

消息：分区’％s’的VALUES值必须具有类型INT

错误：1698SQLSTATE： （） 28000 ER_ACCESS_DENIED_NO_PASSWORD_ERROR

消息：拒绝用户’％s’@’％s’的访问

错误：1699SQLSTATE： （） HY000 ER_SET_PASSWORD_AUTH_PLUGIN

消息：SET PASSWORD对于通过插件进行身份验证没有意义

错误：1700SQLSTATE： （） HY000 ER_GRANT_PLUGIN_USER_EXISTS

消息：GRANT with IDENTIFIED WITH是非法的，因为用户％ - 。*已经存在

错误：1701SQLSTATE： （） 42000 ER_TRUNCATE_ILLEGAL_FK

消息：无法截断外键约束（％s）中引用的表

错误：1702SQLSTATE： （） HY000 ER_PLUGIN_IS_PERMANENT

消息：插件’％s’是force_plus_permanent，无法卸载

错误：1703SQLSTATE： （） HY000 ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN

消息：心跳周期的请求值小于1毫秒。该值重置为0，意味着心跳将有效地被禁用。

错误：1704SQLSTATE： （） HY000 ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX

消息：心跳周期的请求值超过“slave_net_timeout”秒的值。X- 200 200 200 200 X- 200 200 X- 200 200：200：

错误：1705SQLSTATE： （） HY000 ER_STMT_CACHE_FULL

消息：多行语句需要超过“max_binlog_stmt_cache_size”字节的存储空间; 增加这个mysqld变量，然后再试一次

错误：1706SQLSTATE： （） HY000 ER_MULTI_UPDATE_KEY_CONFLICT

消息：主键/分区密钥更新是不允许的，因为表被更新为’％s’和’％s’。

错误：1707SQLSTATE： （） HY000 ER_TABLE_NEEDS_REBUILD

消息：需要表重建。请执行“ALTER TABLE％sFORCE”或转储/重新加载修复它！

错误：1708SQLSTATE： （） HY000 WARN_OPTION_BELOW_LIMIT

消息：’％s’的值应该不小于’％s’的值

错误：1709SQLSTATE： （） HY000 ER_INDEX_COLUMN_TOO_LONG

消息：索引列大小太大。最大列大小为％lu字节。

错误：1710SQLSTATE： （） HY000 ER_ERROR_IN_TRIGGER_BODY

消息：触发器’％s’在其正文中有错误：’％s’

错误：1711SQLSTATE： （） HY000 ER_ERROR_IN_UNKNOWN_TRIGGER_BODY

消息：未知的触发器的主体有一个错误：’％s’

错误：1712SQLSTATE： （） HY000 ER_INDEX_CORRUPT

消息：索引％s已损坏

错误：1713SQLSTATE： （） HY000 ER_UNDO_RECORD_TOO_BIG

消息：撤消日志记录太大。

错误：1714SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT

消息：INSERT IGNORE … SELECT不安全，因为SELECT检索行的顺序确定忽略哪个（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1715SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE

消息：INSERT … SELECT … ON DUPLICATE KEY UPDATE不安全，因为SELECT检索行的顺序确定更新了哪个（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1716SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_REPLACE_SELECT

消息：REPLACE … SELECT不安全，因为SELECT检索行的顺序确定替换了哪个（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1717SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT

消息：CREATE … IGNORE SELECT不安全，因为SELECT检索行的顺序确定忽略哪个（如果有）行）。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1718SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT

消息：CREATE … REPLACE SELECT不安全，因为SELECT检索行的顺序确定替换了哪个（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1719SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_UPDATE_IGNORE

消息：UPDATE IGNORE不安全，因为更新行的顺序决定忽略哪个（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1720SQLSTATE： （） HY000 ER_PLUGIN_NO_UNINSTALL

消息：插件’％s’被标记为不可动态卸载。您必须停止服务器才能卸载它。

错误：1721SQLSTATE： （） HY000 ER_PLUGIN_NO_INSTALL

消息：插件’％s’被标记为不可动态安装。你必须停止服务器来安装它。

错误：1722SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT

消息：从另一个表中选择之后，使用自动增量列写入表的语句是不安全的，因为检索行的顺序决定了将写入（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1723SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC

消息：CREATE TABLE … SELECT …在具有自动增量列的表上不安全，因为SELECT检索行的顺序确定插入了哪个（如果有的话）行。无法预测此顺序，并可能在主机和从机上有所不同。

错误：1724SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_INSERT_TWO_KEYS

消息：INSERT … ON DUPLICATE KEY UPDATE在具有多个UNIQUE KEY的表上是不安全的

错误：1725SQLSTATE： （） HY000 ER_TABLE_IN_FK_CHECK

消息：表正在用于外键检查。

错误：1726SQLSTATE： （） HY000 ER_UNSUPPORTED_ENGINE

消息：存储引擎’％s’不支持系统表。[％S％S]

错误：1727SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST

消息：INSERT进入自动增量字段不是组合主键的第一部分是不安全的。

错误：1728SQLSTATE： （） HY000 ER_CANNOT_LOAD_FROM_TABLE_V2

消息：无法从％s。％s加载。表可能已损坏

错误：1729SQLSTATE： （） HY000 ER_MASTER_DELAY_VALUE_OUT_OF_RANGE

消息：主延迟的请求值％s超过最大％u

错误：1730SQLSTATE： （） HY000 ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT

消息：只有Format_description_log_event和行事件才允许在BINLOG语句中（但提供了％s）

错误：1731SQLSTATE： （） HY000 ER_PARTITION_EXCHANGE_DIFFERENT_OPTION

消息：分区和表之间不匹配的属性’％s’

错误：1732SQLSTATE： （） HY000 ER_PARTITION_EXCHANGE_PART_TABLE

消息：与分区交换的表被分区：’％s’

错误：1733SQLSTATE： （） HY000 ER_PARTITION_EXCHANGE_TEMP_TABLE

消息：与分区交换的表是临时的：’％s’

错误：1734SQLSTATE： （） HY000 ER_PARTITION_INSTEAD_OF_SUBPARTITION

消息：子分区表，使用子分区而不是分区

错误：1735SQLSTATE： （） HY000 ER_UNKNOWN_PARTITION

消息：表’％s’中的未知分区’％s’

错误：1736SQLSTATE： （） HY000 ER_TABLES_DIFFERENT_METADATA

消息：表具有不同的定义

错误：1737SQLSTATE： （） HY000 ER_ROW_DOES_NOT_MATCH_PARTITION

消息：找到与分区不匹配的行

错误：1738SQLSTATE： （） HY000 ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX

消息：选项binlog_cache_size（％lu）大于max_binlog_cache_size（％lu）; 将binlog_cache_size设置为等于max_binlog_cache_size。

错误：1739SQLSTATE： （） HY000 ER_WARN_INDEX_NOT_APPLICABLE

消息：由于字段’％s’上的类型或归类转换，无法使用索引’％s’上的％s访问

错误：1740SQLSTATE： （） HY000 ER_PARTITION_EXCHANGE_FOREIGN_KEY

消息：与分区交换的表有外键引用：’％s’

错误：1741SQLSTATE： （） HY000 ER_NO_SUCH_KEY_VALUE

消息：表’％s。％s’中找不到键值’％s’

错误：1742SQLSTATE： （） HY000 ER_RPL_INFO_DATA_TOO_LONG

消息：“％s”列的数据太长

错误：1743SQLSTATE： （） HY000 ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE

消息：从网络读取时，复制事件校验和验证失败。

错误：1744SQLSTATE： （） HY000 ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE

消息：从日志文件读取时，复制事件校验和验证失败。

错误：1745SQLSTATE： （） HY000 ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX

消息：选项binlog_stmt_cache_size（％lu）大于max_binlog_stmt_cache_size（％lu）; 将binlog_stmt_cache_size设置为等于max_binlog_stmt_cache_size。

错误：1746SQLSTATE： （） HY000 ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT

消息：在创建’％s’时无法更新表’％s’。

错误：1747SQLSTATE： （） HY000 ER_PARTITION_CLAUSE_ON_NONPARTITIONED

消息：非分区表上的PARTITION（）子句

错误：1748SQLSTATE： （） HY000 ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET

消息：找到一行不匹配给定的分区集

错误：1749SQLSTATE： （） HY000 ER_NO_SUCH_PARTITION__UNUSED

消息：分区’％s’不存在

错误：1750SQLSTATE： （） HY000 ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE

消息：更改复制存储库的类型时出错：％s。

错误：1751SQLSTATE： （） HY000 ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE

消息：创建一些临时表不能回滚。

错误：1752SQLSTATE： （） HY000 ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE

消息：有些临时表被删除，但这些操作无法回滚。

错误：1753SQLSTATE： （） HY000 ER_MTS_FEATURE_IS_NOT_SUPPORTED

消息：多线程从站模式不支持％s。％S

错误：1754SQLSTATE： （） HY000 ER_MTS_UPDATED_DBS_GREATER_MAX

消息：修改后的数据库数超过最大％d; 数据库名称将不会包含在复制事件元数据中。

错误：1755SQLSTATE： （） HY000 ER_MTS_CANT_PARALLEL

消息：并行模式下无法执行当前事件组。遇到事件％s，中继日志名称％s，位置％s阻止以并行模式执行此事件组。原因：％s。

错误：1756SQLSTATE： （） HY000 ER_MTS_INCONSISTENT_DATA

消息：％s

错误：1757SQLSTATE： （） HY000 ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING

消息：分区表不支持FULLTEXT索引。

错误：1758SQLSTATE： （） 35000 ER_DA_INVALID_CONDITION_NUMBER

消息：条件号无效

错误：1759SQLSTATE： （） HY000 ER_INSECURE_PLAIN_TEXT

消息：没有SSL / TLS的纯文本发送密码是非常不安全的。

错误：1760SQLSTATE： （） HY000 ER_INSECURE_CHANGE_MASTER

消息：在主信息存储库中存储MySQL用户名或密码信息不安全，因此不推荐。请考虑使用用户和密码连接选项来启动起始; 有关详细信息，请参阅“MySQL手册”中的“START SLAVE Syntax”。

错误：1761SQLSTATE： （） 23000 ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO

消息：表’％s’的外键约束，记录’％s’将导致表’％s’中的重复条目，键’％s’

错误：1762SQLSTATE： （） 23000 ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO

消息：表’％s’的外键约束，记录’％s’将导致子表中的重复条目

错误：1763SQLSTATE： （） HY000 ER_SQLTHREAD_WITH_SECURE_SLAVE

消息：仅在启动从属SQL线程时，无法设置身份验证选项。

错误：1764SQLSTATE： （） HY000 ER_TABLE_HAS_NO_FT

消息：该表没有FULLTEXT索引来支持此查询

错误：1765SQLSTATE： （） HY000 ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER

消息：系统变量％s不能在存储的函数或触发器中设置。

错误：1766SQLSTATE： （） HY000 ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION

消息：当有正在进行的事务时，系统变量％s无法设置。

错误：1767SQLSTATE： （） HY000 ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST

消息：系统变量@@ SESSION.GTID_NEXT的值为％s，不在@@ SESSION.GTID_NEXT_LIST中列出。

错误：1768SQLSTATE： （） HY000 ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION_WHEN_GTID_NEXT_LIST_IS_NULL

消息：系统变量@@ SESSION.GTID_NEXT不能在事务中更改。

ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION_WHEN_GTID_NEXT_LIST_IS_NULL 5.7.5之后被去除。

错误：1768SQLSTATE： （） HY000 ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION

消息：系统变量@@ SESSION.GTID_NEXT不能在事务中更改。

ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION 在5.7.6中加了。

错误：1769SQLSTATE： （） HY000 ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION

消息：语句“SET％s”无法调用存储的函数。

错误：1770SQLSTATE： （） HY000 ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL

消息：当@@ SESSION.GTID_NEXT_LIST为非空时，系统变量@@ SESSION.GTID_NEXT不能为“AUTOMATIC”。

错误：1771SQLSTATE： （） HY000 ER_SKIPPING_LOGGED_TRANSACTION

消息：跳过事务％s，因为它已被执行和记录。

错误：1772SQLSTATE： （） HY000 ER_MALFORMED_GTID_SET_SPECIFICATION

消息：格式错误的GTID设置规范’％s’。

错误：1773SQLSTATE： （） HY000 ER_MALFORMED_GTID_SET_ENCODING

消息：格式错误的GTID集编码。

错误：1774SQLSTATE： （） HY000 ER_MALFORMED_GTID_SPECIFICATION

消息：格式错误的GTID规范’％s’。

错误：1775SQLSTATE： （） HY000 ER_GNO_EXHAUSTED

消息：不可能生成全局事务标识符：整数分量达到最大值。使用新的server_uuid重新启动服务器。

错误：1776SQLSTATE： （） HY000 ER_BAD_SLAVE_AUTO_POSITION

消息：MASTER_AUTO_POSITION活动时无法设置参数MASTER_LOG_FILE，MASTER_LOG_POS，RELAY_LOG_FILE和RELAY_LOG_POS。

错误：1777SQLSTATE： （） HY000 ER_AUTO_POSITION_REQUIRES_GTID_MODE_ON

消息：CHANGE MASTER TO MASTER_AUTO_POSITION = 1只能在@@ GLOBAL.GTID_MODE = ON时执行。

ER_AUTO_POSITION_REQUIRES_GTID_MODE_ON 5.7.5之后被去除。

错误：1777SQLSTATE： （） HY000 ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF

消息：CHANGE MASTER TO MASTER_AUTO_POSITION = 1无法执行，因为@@ GLOBAL.GTID_MODE = OFF。

ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF 在5.7.6中加了。

错误：1778SQLSTATE： （） HY000 ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET

消息：当@@ SESSION.GTID_NEXT ==’UUID：NUMBER’时，不能在事务中执行带有隐式提交的语句。

错误：1779SQLSTATE： （） HY000 ER_GTID_MODE_2_OR_3_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON

消息：@@ GLOBAL.GTID_MODE = ON或UPGRADE_STEP_2要求@@ GLOBAL.ENFORCE_GTID_CONSISTENCY = 1。

ER_GTID_MODE_2_OR_3_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON 5.7.5之后被去除。

错误：1779SQLSTATE： （） HY000 ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON

消息：GTID_MODE = ON需要ENFORCE_GTID_CONSISTENCY = ON。

ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON 在5.7.6中加了。

错误：1780SQLSTATE： （） HY000 ER_GTID_MODE_REQUIRES_BINLOG

消息：@@ GLOBAL.GTID_MODE = ON或ON_PERMISSIVE或OFF_PERMISSIVE需要–log-bin和–log-slave-updates。

错误：1781SQLSTATE： （） HY000 ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF

消息：@@ SESSION.GTID_NEXT不能设置为UUID：NUMBER当@@ GLOBAL.GTID_MODE = OFF时。

错误：1782SQLSTATE： （） HY000 ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON

当@@ GLOBAL.GTID_MODE = ON时，消息：@@ SESSION.GTID_NEXT不能设置为ANONYMOUS。

错误：1783SQLSTATE： （） HY000 ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF

当@@ GLOBAL.GTID_MODE = OFF时，消息：@@ SESSION.GTID_NEXT_LIST不能设置为非NULL值。

错误：1784SQLSTATE： （） HY000 ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF

消息：当@@ GLOBAL.GTID_MODE = OFF时，找到Gtid_log_event或Previous_gtids_log_event。

ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF 5.7.5之后被去除。

错误：1784SQLSTATE： （） HY000 ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF__UNUSED

消息：当@@ GLOBAL.GTID_MODE = OFF时，找到Gtid_log_event。

ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF__UNUSED 在5.7.6中加了。

错误：1785SQLSTATE： （） HY000 ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE

消息：语句违反GTID一致性：对非事务表的更新只能在自动提交的语句或单语句事务中完成，而不能与事务表的更新相同。

错误：1786SQLSTATE： （） HY000 ER_GTID_UNSAFE_CREATE_SELECT

消息：语句违反了GTID的一致性：CREATE TABLE … SELECT。

错误：1787SQLSTATE： （） HY000 ER_GTID_UNSAFE_CREATE_DROP_TEMPORARY_TABLE_IN_TRANSACTION

消息：语句违反GTID一致性：CREATE TEMPORARY TABLE和DROP TEMPORARY TABLE只能在事务上下文之外执行。这些语句也不允许在函数或触发器中，因为函数和触发器也被认为是多语句事务。

错误：1788SQLSTATE： （） HY000 ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME

消息：@@ GLOBAL.GTID_MODE的值一次只能更改一次：OFF < - > OFF_PERMISSIVE < - > ON_PERMISSIVE < - > ON。另请注意，所有服务器上的值必须同时升高或降低。有关说明，请参阅手册。

错误：1789SQLSTATE： （） HY000 ER_MASTER_HAS_PURGED_REQUIRED_GTIDS

消息：从站正在使用CHANGE MASTER TO MASTER_AUTO_POSITION = 1进行连接，但是主站已经清除了包含从站所需的GTID的二进制日志。

错误：1790SQLSTATE： （） HY000 ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID

消息：@@ SESSION.GTID_NEXT不能由拥有GTID的客户端更改。客户拥有％s。所有权在COMMIT或ROLLBACK上发布。

错误：1791SQLSTATE： （） HY000 ER_UNKNOWN_EXPLAIN_FORMAT

消息：未知EXPLAIN格式名称：’％s’

错误：1792SQLSTATE： （） 25006 ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION

消息：无法在READ ONLY事务中执行语句。

错误：1793SQLSTATE： （） HY000 ER_TOO_LONG_TABLE_PARTITION_COMMENT

消息：表分区’％s’的注释太长（max =％lu）

错误：1794SQLSTATE： （） HY000 ER_SLAVE_CONFIGURATION

消息：从站未配置或未正确初始化。您必须至少设置–server-id才能启用主服务器或从服务器。在MySQL错误日志中可以找到其他错误消息。

错误：1795SQLSTATE： （） HY000 ER_INNODB_FT_LIMIT

消息：InnoDB目前支持一次创建一个FULLTEXT索引

错误：1796SQLSTATE： （） HY000 ER_INNODB_NO_FT_TEMP_TABLE

消息：无法在临时InnoDB表上创建FULLTEXT索引

错误：1797SQLSTATE： （） HY000 ER_INNODB_FT_WRONG_DOCID_COLUMN

消息：列“％s”对于InnoDB FULLTEXT索引是错误的类型

错误：1798SQLSTATE： （） HY000 ER_INNODB_FT_WRONG_DOCID_INDEX

消息：对于InnoDB FULLTEXT索引，索引’％s’的类型错误

错误：1799SQLSTATE： （） HY000 ER_INNODB_ONLINE_LOG_TOO_BIG

消息：创建索引’％s’需要多于’innodb_online_alter_log_max_size’字节的修改日志。请再试一次。

错误：1800SQLSTATE： （） HY000 ER_UNKNOWN_ALTER_ALGORITHM

消息：未知ALGORITHM’％s’

错误：1801SQLSTATE： （） HY000 ER_UNKNOWN_ALTER_LOCK

消息：未知LOCK类型’％s’

错误：1802SQLSTATE： （） HY000 ER_MTS_CHANGE_MASTER_CANT_RUN_WITH_GAPS

消息：当从站在MTS模式下出现错误或死机时，CHANGE MASTER无法执行。考虑使用RESET SLAVE或START SLAVE UNTIL。

错误：1803SQLSTATE： （） HY000 ER_MTS_RECOVERY_FAILURE

消息：SLAVE在并行执行模式下出错，无法恢复。在MySQL错误日志中可以找到其他错误消息。

错误：1804SQLSTATE： （） HY000 ER_MTS_RESET_WORKERS

消息：无法清理工作信息表。在MySQL错误日志中可以找到其他错误消息。

错误：1805SQLSTATE： （） HY000 ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2

消息：％s。％s的列计数错误。预期％d，发现％d。表可能已损坏

错误：1806SQLSTATE： （） HY000 ER_SLAVE_SILENT_RETRY_TRANSACTION

消息：从站必须静默地重试当前事务

错误：1807SQLSTATE： （） HY000 ER_DISCARD_FK_CHECKS_RUNNING

消息：表’％s’上有一个外键检查。不能丢弃表。

错误：1808SQLSTATE： （） HY000 ER_TABLE_SCHEMA_MISMATCH

消息：模式不匹配（％s）

错误：1809SQLSTATE： （） HY000 ER_TABLE_IN_SYSTEM_TABLESPACE

消息：表’％s’在系统表空间中

错误：1810SQLSTATE： （） HY000 ER_IO_READ_ERROR

消息：IO读取错误：（％lu，％s）％s

错误：1811SQLSTATE： （） HY000 ER_IO_WRITE_ERROR

消息：IO写入错误：（％lu，％s）％s

错误：1812SQLSTATE： （） HY000 ER_TABLESPACE_MISSING

消息：表％s缺少表空间。

错误：1813SQLSTATE： （） HY000 ER_TABLESPACE_EXISTS

消息：表空间’％s’存在。

错误：1814SQLSTATE： （） HY000 ER_TABLESPACE_DISCARDED

消息：表’％s’已丢弃表空间

错误：1815SQLSTATE： （） HY000 ER_INTERNAL_ERROR

消息：内部错误：％s

错误：1816SQLSTATE： （） HY000 ER_INNODB_IMPORT_ERROR

消息：ALTER TABLE％s IMPORT TABLESPACE failed with error％lu：’％s’

错误：1817SQLSTATE： （） HY000 ER_INNODB_INDEX_CORRUPT

消息：索引损坏：％s

错误：1818SQLSTATE： （） HY000 ER_INVALID_YEAR_COLUMN_LENGTH

消息：仅支持YEAR或YEAR（4）列。

错误：1819SQLSTATE： （） HY000 ER_NOT_VALID_PASSWORD

消息：您的密码不符合当前的政策要求

错误：1820SQLSTATE： （） HY000 ER_MUST_CHANGE_PASSWORD

消息：在执行此语句之前，必须使用ALTER USER语句重置密码。

错误：1821SQLSTATE： （） HY000 ER_FK_NO_INDEX_CHILD

消息：无法添加外键constaint。外部表’％s’中约束’％s’的缺失索引

错误：1822SQLSTATE： （） HY000 ER_FK_NO_INDEX_PARENT

消息：无法添加外键constaint。引用表’％s’中约束’％s’的缺失索引

错误：1823SQLSTATE： （） HY000 ER_FK_FAIL_ADD_SYSTEM

消息：无法将外键约束’％s’添加到系统表

错误：1824SQLSTATE： （） HY000 ER_FK_CANNOT_OPEN_PARENT

消息：无法打开引用的表’％s’

错误：1825SQLSTATE： （） HY000 ER_FK_INCORRECT_OPTION

消息：无法在表’％s’上添加外键约束。FOREIGN KEY约束’％s’中的错误选项

错误：1826SQLSTATE： （） HY000 ER_FK_DUP_NAME

消息：重复的外键约束名称’％s’

错误：1827SQLSTATE： （） HY000 ER_PASSWORD_FORMAT

消息：密码哈希不具有预期的格式。检查密码算法是否正确使用PASSWORD（）函数。

错误：1828SQLSTATE： （） HY000 ER_FK_COLUMN_CANNOT_DROP

消息：无法删除列’％s’：外键约束’％s’中需要

错误：1829SQLSTATE： （） HY000 ER_FK_COLUMN_CANNOT_DROP_CHILD

消息：不能删除列’％s’：需要在表’％s’的外键约束’％s’

错误：1830SQLSTATE： （） HY000 ER_FK_COLUMN_NOT_NULL

消息：列’％s’不能为NULL：在外键约束’％s’SET NULL中需要

错误：1831SQLSTATE： （） HY000 ER_DUP_INDEX

消息：表’％s。％s’上定义的重复索引’％s’。这是不推荐的，在将来的版本中将被禁止。

错误：1832SQLSTATE： （） HY000 ER_FK_COLUMN_CANNOT_CHANGE

消息：无法更改列’％s’：用于外键约束’％s’

错误：1833SQLSTATE： （） HY000 ER_FK_COLUMN_CANNOT_CHANGE_CHILD

消息：无法更改列’％s’：用于表’％s’的外键约束’％s’

错误：1834SQLSTATE： （） HY000 ER_FK_CANNOT_DELETE_PARENT

消息：无法从表’％s’的外键约束’％s’中的父表中删除行

ER_FK_CANNOT_DELETE_PARENT 在5.7.3之后被删除。

错误：1834SQLSTATE： （） HY000 ER_UNUSED5

消息：无法从表’％s’的外键约束’％s’中的父表中删除行

ER_UNUSED5 在5.7.4中加了。

错误：1835SQLSTATE： （） HY000 ER_MALFORMED_PACKET

消息：格式不正确的通信包。

错误：1836SQLSTATE： （） HY000 ER_READ_ONLY_MODE

消息：以只读模式运行

错误：1837SQLSTATE： （） HY000 ER_GTID_NEXT_TYPE_UNDEFINED_GROUP

消息：当@@ SESSION.GTID_NEXT设置为GTID时，必须在COMMIT或ROLLBACK之后将其显式设置为不同的值。请查看GTID_NEXT变量手册页，了解详细说明。当前@@ SESSION.GTID_NEXT是’％s’。

错误：1838SQLSTATE： （） HY000 ER_VARIABLE_NOT_SETTABLE_IN_SP

消息：系统变量％s无法在存储过程中设置。

错误：1839SQLSTATE： （） HY000 ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF

消息：@@ GLOBAL.GTID_PURGED只能在@@ GLOBAL.GTID_MODE = ON时设置。

错误：1840SQLSTATE： （） HY000 ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY

消息：@@ GLOBAL.GTID_PURGED只能在@@ GLOBAL.GTID_EXECUTED为空时设置。

错误：1841SQLSTATE： （） HY000 ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY

消息：@@ GLOBAL.GTID_PURGED只能在没有正在进行的交易（甚至不在其他客户端）中设置）。

错误：1842SQLSTATE： （） HY000 ER_GTID_PURGED_WAS_CHANGED

消息：@@ GLOBAL.GTID_PURGED已从“％s”更改为“％s”。

错误：1843SQLSTATE： （） HY000 ER_GTID_EXECUTED_WAS_CHANGED

消息：@@ GLOBAL.GTID_EXECUTED已从“％s”更改为“％s”。

错误：1844SQLSTATE： （） HY000 ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES

消息：无法执行语句：自BINLOG_FORMAT = STATEMENT以来无法写入二进制日志，并且复制和非复制表均被写入。

错误：1845SQLSTATE： （） 0A000 ER_ALTER_OPERATION_NOT_SUPPORTED

消息：此操作不支持％s。尝试％s。

ER_ALTER_OPERATION_NOT_SUPPORTED 在5.7.1中被添加。

错误：1846SQLSTATE： （） 0A000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON

消息：不支持％s。原因：％s。尝试％s。

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON 在5.7.1中被添加。

错误：1847SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY

消息：COPY算法需要锁定

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY 在5.7.1中被添加。

错误：1848SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION

消息：分区特定操作还不支持LOCK / ALGORITHM

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION 在5.7.1中被添加。

错误：1849SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME

消息：重命名参与外键的列

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME 在5.7.1中被添加。

错误：1850SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE

消息：无法更改列类型INPLACE

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE 在5.7.1中被添加。

错误：1851SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK

消息：添加外键需要foreign_key_checks = OFF

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK 在5.7.1中被添加。

错误：1852SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE

消息：使用IGNORE创建唯一索引需要COPY算法来删除重复的行

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE 在5.7.1中添加，5.7.3之后删除。

错误：1852SQLSTATE： （） HY000 ER_UNUSED6

消息：使用IGNORE创建唯一索引需要COPY算法来删除重复的行

ER_UNUSED6 在5.7.4中加了。

错误：1853SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK

消息：删除主键是不允许的，而不添加新的主键

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK 在5.7.1中被添加。

错误：1854SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC

消息：添加自动增量列需要锁定

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC 在5.7.1中被添加。

错误：1855SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS

消息：无法用用户可见的FTS_DOC_ID替换隐藏的FTS_DOC_ID

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS 在5.7.1中被添加。

错误：1856SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS

消息：无法删除或重命名FTS_DOC_ID

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS 在5.7.1中被添加。

错误：1857SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS

消息：全文索引创建需要锁定

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS 在5.7.1中被添加。

错误：1858SQLSTATE： （） HY000 ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE

消息：使用@@ GLOBAL.GTID_MODE = ON运行服务器时，无法设置sql_slave_skip_counter。相反，对于要跳过的每个事务，生成与事务相同的GTID的空事务

ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE 在5.7.1中被添加。

错误：1859SQLSTATE： （） 23000 ER_DUP_UNKNOWN_IN_INDEX

消息：密钥’％s’的重复条目

ER_DUP_UNKNOWN_IN_INDEX 在5.7.1中被添加。

错误：1860SQLSTATE： （） HY000 ER_IDENT_CAUSES_TOO_LONG_PATH

消息：对象的长数据库名称和标识符导致路径长度超过％d个字符。路径：’％s’。

ER_IDENT_CAUSES_TOO_LONG_PATH 在5.7.1中被添加。

错误：1861SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL

消息：无法按照此SQL_MODE的要求静默转换NULL值

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL 在5.7.1中被添加。

错误：1862SQLSTATE： （） HY000 ER_MUST_CHANGE_PASSWORD_LOGIN

消息：您的密码已过期。要登录，您必须使用支持过期密码的客户端进行更改。

ER_MUST_CHANGE_PASSWORD_LOGIN 在5.7.1中被添加。

错误：1863SQLSTATE： （） HY000 ER_ROW_IN_WRONG_PARTITION

消息：在错误的分区％s中找到一行

ER_ROW_IN_WRONG_PARTITION 在5.7.1中被添加。

错误：1864SQLSTATE： （） HY000 ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX

消息：由于其大小％lu超过slave_pending_jobs_size_max的％lu，无法将事件％s，中继日志名称％s，位置％s计划到工作线程。

ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX 在5.7.2中加了。

错误：1865SQLSTATE： （） HY000 ER_INNODB_NO_FT_USES_PARSER

消息：无法使用PARSER在InnoDB表上CREATE FULLTEXT INDEX

ER_INNODB_NO_FT_USES_PARSER 在5.7.2中加了。

错误：1866SQLSTATE： （） HY000 ER_BINLOG_LOGICAL_CORRUPTION

消息：二进制日志文件’％s’在逻辑上已损坏：％s

ER_BINLOG_LOGICAL_CORRUPTION 在5.7.2中加了。

错误：1867SQLSTATE： （） HY000 ER_WARN_PURGE_LOG_IN_USE

消息：文件％s未被清除，因为它被％d线程读取，仅清除％d文件中的％d。

ER_WARN_PURGE_LOG_IN_USE 在5.7.2中加了。

错误：1868SQLSTATE： （） HY000 ER_WARN_PURGE_LOG_IS_ACTIVE

消息：文件％s未被清除，因为它是活动日志文件。

ER_WARN_PURGE_LOG_IS_ACTIVE 在5.7.2中加了。

错误：1869SQLSTATE： （） HY000 ER_AUTO_INCREMENT_CONFLICT

消息：UPDATE中的自动递增值与内部生成的值冲突

ER_AUTO_INCREMENT_CONFLICT 在5.7.2中加了。

错误：1870SQLSTATE： （） HY000 WARN_ON_BLOCKHOLE_IN_RBR

消息：对于以行格式修改BLACKHOLE表的％s语句，不记录行事件。表：’％s’

WARN_ON_BLOCKHOLE_IN_RBR 在5.7.2中加了。

错误：1871SQLSTATE： （） HY000 ER_SLAVE_MI_INIT_REPOSITORY

消息：从服务器无法初始化主信息结构

ER_SLAVE_MI_INIT_REPOSITORY 在5.7.2中加了。

错误：1872SQLSTATE： （） HY000 ER_SLAVE_RLI_INIT_REPOSITORY

消息：Slave无法从存储库初始化中继日志信息结构

ER_SLAVE_RLI_INIT_REPOSITORY 在5.7.2中加了。

错误：1873SQLSTATE： （） 28000 ER_ACCESS_DENIED_CHANGE_USER_ERROR

消息：访问被拒绝尝试更改为用户’％s’@’％s’（使用密码：％s）。断开。

ER_ACCESS_DENIED_CHANGE_USER_ERROR 在5.7.2中加了。

错误：1874SQLSTATE： （） HY000 ER_INNODB_READ_ONLY

消息：InnoDB处于只读模式。

ER_INNODB_READ_ONLY 在5.7.2中加了。

错误：1875SQLSTATE： （） HY000 ER_STOP_SLAVE_SQL_THREAD_TIMEOUT

消息：STOP SLAVE命令执行不完整：从机SQL线程得到停止信号，线程正忙，当前任务完成后，SQL线程将停止。

ER_STOP_SLAVE_SQL_THREAD_TIMEOUT 在5.7.2中加了。

错误：1876SQLSTATE： （） HY000 ER_STOP_SLAVE_IO_THREAD_TIMEOUT

消息：STOP SLAVE命令执行不完整：从机IO线程得到停止信号，线程正忙，当前任务完成后，IO线程将停止。

ER_STOP_SLAVE_IO_THREAD_TIMEOUT 在5.7.2中加了。

错误：1877SQLSTATE： （） HY000 ER_TABLE_CORRUPT

消息：无法执行操作。表’％s。％s’丢失，损坏或包含错误的数据。

ER_TABLE_CORRUPT 在5.7.2中加了。

错误：1878SQLSTATE： （） HY000 ER_TEMP_FILE_WRITE_FAILURE

消息：临时文件写入失败。

ER_TEMP_FILE_WRITE_FAILURE 在5.7.3中加入。

错误：1879SQLSTATE： （） HY000 ER_INNODB_FT_AUX_NOT_HEX_ID

消息：升级索引名称失败，请使用create index（alter table）算法复制重建索引。

ER_INNODB_FT_AUX_NOT_HEX_ID 在5.7.4中加了。

错误：1880SQLSTATE： （） HY000 ER_OLD_TEMPORALS_UPGRADED

消息：TIME / TIMESTAMP / DATETIME旧格式的列已升级到新格式。

ER_OLD_TEMPORALS_UPGRADED 在5.7.4中加了。

错误：1881SQLSTATE： （） HY000 ER_INNODB_FORCED_RECOVERY

消息：innodb_forced_recovery> 0时不允许操作。

ER_INNODB_FORCED_RECOVERY 在5.7.4中加了。

错误：1882SQLSTATE： （） HY000 ER_AES_INVALID_IV

消息：提供给％s的初始化向量太短。必须至少％d个字节长

ER_AES_INVALID_IV 在5.7.4中加了。

错误：1883SQLSTATE： （） HY000 ER_PLUGIN_CANNOT_BE_UNINSTALLED

消息：插件’％s’现在无法卸载。％S

ER_PLUGIN_CANNOT_BE_UNINSTALLED 加入5.7.5。

错误：1884SQLSTATE： （） HY000 ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP

消息：无法执行语句，因为它需要作为多个语句写入二进制日志，而当@@ SESSION.GTID_NEXT ==’UUID：NUMBER’时，这是不允许的。

ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP 加入5.7.5。

错误：1885SQLSTATE： （） HY000 ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER

消息：使用主服务器SERVER_UUID，Slave拥有比主服务器更多的GTID。这可能表示二进制日志的结尾被截断，或者最后一个二进制日志文件丢失，例如，当sync_binlog！= 1发生电源或磁盘故障后，主机可能已经或可能没有回滚已经被复制的事务到奴隶。建议复制master已经从slave恢复到master的任何事务，和/或在master上提交空事务以记录在master上提交但不包含在GTID_EXECUTED中的事务。

ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER 在5.7.6中加了。

错误：1906SQLSTATE： （） HY000 ER_SLAVE_IO_THREAD_MUST_STOP

消息：无法使用正在运行的从线程io线程执行此操作; 先运行STOP SLAVE IO_THREAD。

ER_SLAVE_IO_THREAD_MUST_STOP 在5.7.4中加入，5.7.5后除去。

错误：3000SQLSTATE： （） HY000 ER_FILE_CORRUPT

消息：文件％s已损坏

错误：3001SQLSTATE： （） HY000 ER_ERROR_ON_MASTER

消息：查询在主机上部分完成（master上的错误：％d），并被中止。在这一点上，你的主人有机会不一致。如果您确定您的主机是否正常，请在从站上手动运行此查询，然后使用SET GLOBAL SQL_SLAVE_SKIP_COUNTER = 1重新启动从站; START SLAVE ;. 查询： ‘％s’ 的

错误：3002SQLSTATE： （） HY000 ER_INCONSISTENT_ERROR

消息：查询导致主，从不同的错误。主机出错：message（format）=’％s’错误代码=％d; 从站错误：实际消息=’％s’，错误代码=％d。默认数据库：’％s’。查询： ‘％s’ 的

错误：3003SQLSTATE： （） HY000 ER_STORAGE_ENGINE_NOT_LOADED

消息：表’％s’的存储引擎”％s’未加载。

错误：3004SQLSTATE： （） 0Z002 ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER

消息：处理程序未激活时获取堆栈诊断

错误：3005SQLSTATE： （） HY000 ER_WARN_LEGACY_SYNTAX_CONVERTED

消息：不再支持％s。该语句已转换为％s。

错误：3006SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN

消息：语句是不安全的，因为它使用全文解析器插件，这可能不会在从站上返回相同的值。

ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN 在5.7.1中被添加。

错误：3007SQLSTATE： （） HY000 ER_CANNOT_DISCARD_TEMPORARY_TABLE

消息：不能与临时表关联的DISCARD / IMPORT表空间

ER_CANNOT_DISCARD_TEMPORARY_TABLE 在5.7.1中被添加。

错误：3008SQLSTATE： （） HY000 ER_FK_DEPTH_EXCEEDED

消息：外键级联删除/更新超过％d的最大深度。

ER_FK_DEPTH_EXCEEDED 在5.7.2中加了。

错误：3009SQLSTATE： （） HY000 ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2

消息：％s。％s的列计数错误。预期％d，发现％d。创建与MySQL％d，现在运行％d。请使用mysql_upgrade来解决这个错误。

ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2 在5.7.2中加了。

错误：3010SQLSTATE： （） HY000 ER_WARN_TRIGGER_DOESNT_HAVE_CREATED

消息：Trigger％s。％s。％s没有CREATED属性。

ER_WARN_TRIGGER_DOESNT_HAVE_CREATED 在5.7.2中加了。

错误：3011SQLSTATE： （） HY000 ER_REFERENCED_TRG_DOES_NOT_EXIST

消息：给定动作时间和事件类型的引用触发器’％s’不存在。

ER_REFERENCED_TRG_DOES_NOT_EXIST 在5.7.2中加了。

错误：3012SQLSTATE： （） HY000 ER_EXPLAIN_NOT_SUPPORTED

消息：EXPLAIN FOR CONNECTION命令仅适用于SELECT / UPDATE / INSERT / DELETE / REPLACE

ER_EXPLAIN_NOT_SUPPORTED 在5.7.2中加了。

错误：3013SQLSTATE： （） HY000 ER_INVALID_FIELD_SIZE

消息：“％s”列的大小无效。

ER_INVALID_FIELD_SIZE 在5.7.2中加了。

错误：3014SQLSTATE： （） HY000 ER_MISSING_HA_CREATE_OPTION

消息：表存储引擎’％s’发现需要创建选项丢失

ER_MISSING_HA_CREATE_OPTION 在5.7.2中加了。

错误：3015SQLSTATE： （） HY000 ER_ENGINE_OUT_OF_MEMORY

消息：存储引擎’％s’中的内存不足。

ER_ENGINE_OUT_OF_MEMORY 在5.7.3中加入。

错误：3016SQLSTATE： （） HY000 ER_PASSWORD_EXPIRE_ANONYMOUS_USER

消息：匿名用户的密码不能过期。

ER_PASSWORD_EXPIRE_ANONYMOUS_USER 在5.7.3中加入。

错误：3017SQLSTATE： （） HY000 ER_SLAVE_SQL_THREAD_MUST_STOP

消息：此操作无法使用正在运行的slave sql线程执行; 先运行STOP SLAVE SQL_THREAD

ER_SLAVE_SQL_THREAD_MUST_STOP 在5.7.3中加入。

错误：3018SQLSTATE： （） HY000 ER_NO_FT_MATERIALIZED_SUBQUERY

消息：无法在实例化子查询上创建FULLTEXT索引

ER_NO_FT_MATERIALIZED_SUBQUERY 在5.7.4中加了。

错误：3019SQLSTATE： （） HY000 ER_INNODB_UNDO_LOG_FULL

消息：撤消日志错误：％s

ER_INNODB_UNDO_LOG_FULL 在5.7.4中加了。

错误：3020SQLSTATE： （） 2201E ER_INVALID_ARGUMENT_FOR_LOGARITHM

消息：对数参数无效

ER_INVALID_ARGUMENT_FOR_LOGARITHM 在5.7.4中加了。

错误：3021SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP

消息：无法使用正在运行的从线程io线程执行此操作; 首先运行STOP SLAVE IO_THREAD FOR CHANNEL’％s’。

ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP 在5.7.6中加了。

错误：3022SQLSTATE： （） HY000 ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO

消息：当从站有临时表时，此操作可能不安全。这些表将保持打开，直到服务器重新启动或直到任何复制的DROP语句删除表。建议等到slave_open_temp_tables = 0。

ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO 在5.7.4中加了。

错误：3023SQLSTATE： （） HY000 ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS

消息：使用MASTER_LOG_FILE子句更改MASTER TO，但没有MASTER_LOG_POS子句可能不安全。旧的位置值可能对新的二进制日志文件无效。

ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS 在5.7.4中加了。

错误：3024SQLSTATE： （） HY000 ER_QUERY_TIMEOUT

消息：查询执行中断，超过最大语句执行时间

ER_QUERY_TIMEOUT 在5.7.4中加了。

错误：3025SQLSTATE： （） HY000 ER_NON_RO_SELECT_DISABLE_TIMER

消息：选择不是只读语句，禁用定时器

ER_NON_RO_SELECT_DISABLE_TIMER 在5.7.4中加了。

错误：3026SQLSTATE： （） HY000 ER_DUP_LIST_ENTRY

消息：重复条目’％s’。

ER_DUP_LIST_ENTRY 在5.7.4中加了。

错误：3027SQLSTATE： （） HY000 ER_SQL_MODE_NO_EFFECT

消息：’％s’模式不再有任何效果。改用STRICT_ALL_TABLES或STRICT_TRANS_TABLES。

ER_SQL_MODE_NO_EFFECT 在5.7.4中加了。

错误：3028SQLSTATE： （） HY000 ER_AGGREGATE_ORDER_FOR_UNION

消息：ORDER BY的表达式＃％u包含聚合函数并适用于UNION

ER_AGGREGATE_ORDER_FOR_UNION 加入5.7.5。

错误：3029SQLSTATE： （） HY000 ER_AGGREGATE_ORDER_NON_AGG_QUERY

消息：ORDER BY的表达式＃％u包含聚合函数，并应用于非聚合查询的结果

ER_AGGREGATE_ORDER_NON_AGG_QUERY 加入5.7.5。

错误：3030SQLSTATE： （） HY000 ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR

消息：在启用slave-preserve-commit-order后，至少有一名上一个工作人员遇到错误时，从站人员已停止。要保留提交顺序，此线程执行的最后一个事务尚未提交。修复任何失败的线程后重新启动从站时，您也应该修复此工作人员。

ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR 加入5.7.5。

错误：3031SQLSTATE： （） HY000 ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER

消息：slave_preserve_commit_order不支持％s。

ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER 加入5.7.5。

错误：3032SQLSTATE： （） HY000 ER_SERVER_OFFLINE_MODE

消息：服务器当前处于离线模式

ER_SERVER_OFFLINE_MODE 加入5.7.5。

错误：3033SQLSTATE： （） HY000 ER_GIS_DIFFERENT_SRIDS

消息：二进制几何函数％s给出两个不同srid的几何：％u和％u，它们应该是相同的。

作为参数传递给空间函数的几何值必须具有相同的SRID值。

ER_GIS_DIFFERENT_SRIDS 加入5.7.5。

错误：3034SQLSTATE： （） HY000 ER_GIS_UNSUPPORTED_ARGUMENT

消息：使用不支持的参数类型调用几何函数％s。

使用函数不支持的参数类型的组合调用空间函数。

ER_GIS_UNSUPPORTED_ARGUMENT 加入5.7.5。

错误：3035SQLSTATE： （） HY000 ER_GIS_UNKNOWN_ERROR

消息：未知的GIS错误发生在功能％s。

ER_GIS_UNKNOWN_ERROR 加入5.7.5。

错误：3036SQLSTATE： （） HY000 ER_GIS_UNKNOWN_EXCEPTION

消息：未知异常在GIS函数％s中捕获。

ER_GIS_UNKNOWN_EXCEPTION 加入5.7.5。

错误：3037SQLSTATE： （） 22023 ER_GIS_INVALID_DATA

消息：提供给函数％s的GIS数据无效。

调用了一个空间函数，一个参数不被识别为一个有效的几何值。

ER_GIS_INVALID_DATA 加入5.7.5。

错误：3038SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION

消息：几何在函数％s中没有数据。

ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION 加入5.7.5。

错误：3039SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_CENTROID_EXCEPTION

消息：无法计算质心，因为几何在函数％s中为空。

ER_BOOST_GEOMETRY_CENTROID_EXCEPTION 加入5.7.5。

错误：3040SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION

消息：几何重叠计算错误：几何数据在函数％s中无效。

ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION 加入5.7.5。

错误：3041SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION

消息：几何信息计算错误：几何数据在函数％s中无效。

ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION 加入5.7.5。

错误：3042SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION

消息：功能％s中交叉点的分析过程意外中断。

ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION 加入5.7.5。

错误：3043SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION

消息：函数％s中抛出的未知异常。

ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION 加入5.7.5。

错误：3044SQLSTATE： （） HY000 ER_STD_BAD_ALLOC_ERROR

消息：内存分配错误：％s在功能％s中。

ER_STD_BAD_ALLOC_ERROR 加入5.7.5。

错误：3045SQLSTATE： （） HY000 ER_STD_DOMAIN_ERROR

消息：域错误：％s在函数％s。

ER_STD_DOMAIN_ERROR 加入5.7.5。

错误：3046SQLSTATE： （） HY000 ER_STD_LENGTH_ERROR

消息：长度错误：％s在函数％s中。

ER_STD_LENGTH_ERROR 加入5.7.5。

错误：3047SQLSTATE： （） HY000 ER_STD_INVALID_ARGUMENT

消息：参数错误无效：％s在函数％s中。

ER_STD_INVALID_ARGUMENT 加入5.7.5。

错误：3048SQLSTATE： （） HY000 ER_STD_OUT_OF_RANGE_ERROR

消息：超出范围错误：％s在函数％s中。

ER_STD_OUT_OF_RANGE_ERROR 加入5.7.5。

错误：3049SQLSTATE： （） HY000 ER_STD_OVERFLOW_ERROR

消息：溢出错误错误：％s在函数％s。

ER_STD_OVERFLOW_ERROR 加入5.7.5。

错误：3050SQLSTATE： （） HY000 ER_STD_RANGE_ERROR

消息：范围错误：％s在函数％s中。

ER_STD_RANGE_ERROR 加入5.7.5。

错误：3051SQLSTATE： （） HY000 ER_STD_UNDERFLOW_ERROR

消息：下溢错误：％s在函数％s中。

ER_STD_UNDERFLOW_ERROR 加入5.7.5。

错误：3052SQLSTATE： （） HY000 ER_STD_LOGIC_ERROR

消息：逻辑错误：％s在函数％s中。

ER_STD_LOGIC_ERROR 加入5.7.5。

错误：3053SQLSTATE： （） HY000 ER_STD_RUNTIME_ERROR

消息：运行时错误：％s在函数％s中。

ER_STD_RUNTIME_ERROR 加入5.7.5。

错误：3054SQLSTATE： （） HY000 ER_STD_UNKNOWN_EXCEPTION

消息：未知异常：％s在函数％s中。

ER_STD_UNKNOWN_EXCEPTION 加入5.7.5。

错误：3055SQLSTATE： （） HY000 ER_GIS_DATA_WRONG_ENDIANESS

消息：几何字节字符串必须是小端。

ER_GIS_DATA_WRONG_ENDIANESS 加入5.7.5。

错误：3056SQLSTATE： （） HY000 ER_CHANGE_MASTER_PASSWORD_LENGTH

消息：为复制用户提供的密码超过32个字符的最大长度

ER_CHANGE_MASTER_PASSWORD_LENGTH 加入5.7.5。

错误：3057SQLSTATE： （） 42000 ER_USER_LOCK_WRONG_NAME

消息：不正确的用户级锁名称’％s’。

ER_USER_LOCK_WRONG_NAME 加入5.7.5。

错误：3058SQLSTATE： （） HY000 ER_USER_LOCK_DEADLOCK

消息：尝试获取用户级锁定时发现死锁; 尝试回滚事务/释放锁并重新启动锁获取。

当Metdata锁定子系统检测到用于获取命名锁的尝试的死锁时，将返回此错误 GET_LOCK。

ER_USER_LOCK_DEADLOCK 加入5.7.5。

错误：3059SQLSTATE： （） HY000 ER_REPLACE_INACCESSIBLE_ROWS

消息：无法执行REPLACE，因为它需要删除视图中不存在的行

ER_REPLACE_INACCESSIBLE_ROWS 加入5.7.5。

错误：3060SQLSTATE： （） HY000 ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS

消息：不支持使用GIS索引在表上进行在线操作

ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS 加入5.7.5。

错误：3061SQLSTATE： （） 42000 ER_ILLEGAL_USER_VAR

消息：用户变量名’％s’是非法的

ER_ILLEGAL_USER_VAR 加入5.7.5。

错误：3062SQLSTATE： （） HY000 ER_GTID_MODE_OFF

消息：GTID_MODE = OFF时不能％s。

ER_GTID_MODE_OFF 加入5.7.5。

错误：3063SQLSTATE： （） HY000 ER_UNSUPPORTED_BY_REPLICATION_THREAD

消息：复制从线程中不能有％s。

ER_UNSUPPORTED_BY_REPLICATION_THREAD 加入5.7.5。

错误：3064SQLSTATE： （） HY000 ER_INCORRECT_TYPE

消息：函数％s中参数％s的类型不正确。

ER_INCORRECT_TYPE 加入5.7.5。

错误：3065SQLSTATE： （） HY000 ER_FIELD_IN_ORDER_NOT_SELECT

消息：表达式＃％u的ORDER BY子句不在SELECT列表中，引用列’％s’不在SELECT列表中; 这与％s不兼容

ER_FIELD_IN_ORDER_NOT_SELECT 加入5.7.5。

错误：3066SQLSTATE： （） HY000 ER_AGGREGATE_IN_ORDER_NOT_SELECT

消息：表达式＃％u的ORDER BY子句不在SELECT列表中，包含聚合函数; 这与％s不兼容

ER_AGGREGATE_IN_ORDER_NOT_SELECT 加入5.7.5。

错误：3067SQLSTATE： （） HY000 ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN

消息：提供的过滤器列表包含不是所需格式的值“db_pattern.table_pattern”

ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN 加入5.7.5。

错误：3068SQLSTATE： （） 08S01 ER_NET_OK_PACKET_TOO_LARGE

消息：OK包太大

ER_NET_OK_PACKET_TOO_LARGE 加入5.7.5。

错误：3069SQLSTATE： （） HY000 ER_INVALID_JSON_DATA

消息：提供给功能％s的无效JSON数据：％s

ER_INVALID_JSON_DATA 加入5.7.5。

错误：3070SQLSTATE： （） HY000 ER_INVALID_GEOJSON_MISSING_MEMBER

消息：提供给功能％s的GeoJSON数据无效：缺少必需的成员’％s’

ER_INVALID_GEOJSON_MISSING_MEMBER 加入5.7.5。

错误：3071SQLSTATE： （） HY000 ER_INVALID_GEOJSON_WRONG_TYPE

消息：提供给功能％s的GeoJSON数据无效：成员’％s’必须为’％s’类型

ER_INVALID_GEOJSON_WRONG_TYPE 加入5.7.5。

错误：3072SQLSTATE： （） HY000 ER_INVALID_GEOJSON_UNSPECIFIED

消息：提供给功能％s的GeoJSON数据无效

ER_INVALID_GEOJSON_UNSPECIFIED 加入5.7.5。

错误：3073SQLSTATE： （） HY000 ER_DIMENSION_UNSUPPORTED

消息：功能％s中不支持的坐标尺寸数：找到％u，预期％u

ER_DIMENSION_UNSUPPORTED 加入5.7.5。

错误：3074SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_DOES_NOT_EXIST

消息：从站通道’％s’不存在。

ER_SLAVE_CHANNEL_DOES_NOT_EXIST 在5.7.6中加了。

错误：3075SQLSTATE： （） HY000 ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT

消息：给定的主机和端口组合已经存在从通道’％s’。

ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT 在5.7.6中加了。

错误：3076SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG

消息：无法创建频道：频道名称无效或太长。

ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG 在5.7.6中加了。

错误：3077SQLSTATE： （） HY000 ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY

消息：要有多个通道，存储库不能是FILE类型; 请检查存储库配置并将其转换为TABLE。

ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY 在5.7.6中加了。

错误：3078SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_DELETE

消息：无法删除通道’％s’的从属信息对象。

ER_SLAVE_CHANNEL_DELETE 在5.7.6中加了。

错误：3079SQLSTATE： （） HY000 ER_SLAVE_MULTIPLE_CHANNELS_CMD

消息：从站上存在多个通道。请提供频道名称作为参数。

ER_SLAVE_MULTIPLE_CHANNELS_CMD 在5.7.6中加了。

错误：3080SQLSTATE： （） HY000 ER_SLAVE_MAX_CHANNELS_EXCEEDED

消息：允许的最大复制通道数超出。

ER_SLAVE_MAX_CHANNELS_EXCEEDED 在5.7.6中加了。

错误：3081SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_MUST_STOP

消息：运行复制线程无法执行此操作; 首先运行STOP SLAVE FOR CHANNEL’％s’

ER_SLAVE_CHANNEL_MUST_STOP 在5.7.6中加了。

错误：3082SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_NOT_RUNNING

消息：此操作需要运行复制线程; 配置从站并运行START SLAVE FOR CHANNEL’％s’

ER_SLAVE_CHANNEL_NOT_RUNNING 在5.7.6中加了。

错误：3083SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_WAS_RUNNING

消息：通道’％s’的复制线程已经运行。

ER_SLAVE_CHANNEL_WAS_RUNNING 在5.7.6中加了。

错误：3084SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_WAS_NOT_RUNNING

消息：通道’％s’的复制线程已经停止。

ER_SLAVE_CHANNEL_WAS_NOT_RUNNING 在5.7.6中加了。

错误：3085SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP

消息：此操作无法使用正在运行的slave sql线程执行; 首先运行STOP SLAVE SQL_THREAD FOR CHANNEL’％s’。

ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP 在5.7.6中加了。

错误：3086SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER

消息：当sql_slave_skip_counter> 0时，不允许使用’START SLAVE [SQL_THREAD]’启动多个SQL线程。sql_slave_skip_counter的值一次只能由一个SQL线程使用。请使用’START SLAVE [SQL_THREAD] FOR CHANNEL’来启动SQL线程，该线程将使用sql_slave_skip_counter的值。

ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER 在5.7.6中加了。

错误：3087SQLSTATE： （） HY000 ER_WRONG_FIELD_WITH_GROUP_V2

消息：％s的表达式＃％u不在GROUP BY子句中，并且包含不在GROUP BY子句中的列的非集合列’％s’ 这与sql_mode = only_full_group_by不兼容

ER_WRONG_FIELD_WITH_GROUP_V2 在5.7.6中加了。

错误：3088SQLSTATE： （） HY000 ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2

消息：在没有GROUP BY的聚合查询中，％s的表达式＃％u包含非集合列’％s’; 这与sql_mode = only_full_group_by不兼容

ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2 在5.7.6中加了。

错误：3089SQLSTATE： （） HY000 ER_WARN_DEPRECATED_SYSVAR_UPDATE

消息：不推荐更新’％s’。它将在未来的版本中成为只读。

ER_WARN_DEPRECATED_SYSVAR_UPDATE 在5.7.6中加了。

错误：3090SQLSTATE： （） HY000 ER_WARN_DEPRECATED_SQLMODE

消息：更改sql模式’％s’已被弃用。它将在以后的版本中被删除。

ER_WARN_DEPRECATED_SQLMODE 在5.7.6中加了。

错误：3091SQLSTATE： （） HY000 ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID

消息：DROP DATABASE失败; 某些表可能已被删除，但数据库目录仍然保留。GTID尚未添加到GTID_EXECUTED中，并且该语句未写入二进制日志。修复如下：（1）从数据库目录％s中删除所有文件; （2）SET GTID_NEXT =’％s’; （3）DROP DATABASE％s。

ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID 在5.7.6中加了。

错误：3092SQLSTATE： （） HY000 ER_GROUP_REPLICATION_CONFIGURATION

消息：服务器未正确配置为组的活动成员。请参阅错误日志的更多详细信息。

ER_GROUP_REPLICATION_CONFIGURATION 在5.7.6中加了。

错误：3093SQLSTATE： （） HY000 ER_GROUP_REPLICATION_RUNNING

消息：START GROUP_REPLICATION命令失败，因为组已经在运行。

ER_GROUP_REPLICATION_RUNNING 在5.7.6中加了。

错误：3094SQLSTATE： （） HY000 ER_GROUP_REPLICATION_APPLIER_INIT_ERROR

消息：由于应用程序模块启动失败，START GROUP_REPLICATION命令失败。

ER_GROUP_REPLICATION_APPLIER_INIT_ERROR 在5.7.6中加了。

错误：3095SQLSTATE： （） HY000 ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT

消息：STOP GROUP_REPLICATION命令执行不完整：应用程序线程在忙时得到停止信号。当前任务完成后，应用程序线程将停止。

ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT 在5.7.6中加了。

错误：3096SQLSTATE： （） HY000 ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR

消息：START GROUP_REPLICATION命令失败，因为初始化组通信层时出现错误。

ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR 在5.7.6中加了。

错误：3097SQLSTATE： （） HY000 ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR

消息：START GROUP_REPLICATION命令失败，因为加入通信组时出现错误。

ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR 在5.7.6中加了。

错误：3098SQLSTATE： （） HY000 ER_BEFORE_DML_VALIDATION_ERROR

消息：该表不符合外部插件的要求。

ER_BEFORE_DML_VALIDATION_ERROR 在5.7.6中加了。

错误：3099SQLSTATE： （） HY000 ER_PREVENTS_VARIABLE_WITHOUT_RBR

消息：无法将二进制日志格式的变量％s的值更改为ROW。

transaction_write_set_extraction 选项值设置 binlog_format为不 ROW。

ER_PREVENTS_VARIABLE_WITHOUT_RBR 在5.7.6中加了。

错误：3100SQLSTATE： （） HY000 ER_RUN_HOOK_ERROR

消息：运行复制钩子’％s’时观察器错误。

ER_RUN_HOOK_ERROR 在5.7.6中加了。

错误：3101SQLSTATE： （） HY000 ER_TRANSACTION_ROLLBACK_DURING_COMMIT

消息：插件指示服务器回滚当前事务。

使用组复制时，这意味着由于一个或多个成员检测到潜在的冲突而导致组认证过程失败，因此被回滚。 请参见 第17章组复制。

ER_TRANSACTION_ROLLBACK_DURING_COMMIT 在5.7.6中加了。

错误：3102SQLSTATE： （） HY000 ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED

消息：生成列’％s’的表达式包含不允许的功能。

ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED 在5.7.6中加了。

错误：3103SQLSTATE： （） HY000 ER_KEY_BASED_ON_GENERATED_COLUMN

消息：无法在虚拟生成的列上定义键/索引。

ER_KEY_BASED_ON_GENERATED_COLUMN 在5.7.6中添加，5.7.7后删除。

错误：3103SQLSTATE： （） HY000 ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN

消息：INPLACE虚拟列的添加或删除不能与其他ALTER TABLE操作组合

ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN 在5.7.8中加了。

错误：3104SQLSTATE： （） HY000 ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN

消息：无法在生成的列上定义带有％s子句的外键。

ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN 在5.7.6中加了。

错误：3105SQLSTATE： （） HY000 ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN

消息：表’％s’中为生成列’％s’指定的值是不允许的。

ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN 在5.7.6中加了。

错误：3106SQLSTATE： （） HY000 ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN

消息：生成的列不支持’％s’。

ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN 在5.7.6中加了。

错误：3107SQLSTATE： （） HY000 ER_GENERATED_COLUMN_NON_PRIOR

消息：生成的列可以仅引用它之前定义的生成列。

要解决此问题，请更改表定义，以便比其引用的任何生成的列晚定义每个生成的列。

ER_GENERATED_COLUMN_NON_PRIOR 在5.7.6中加了。

错误：3108SQLSTATE： （） HY000 ER_DEPENDENT_BY_GENERATED_COLUMN

消息：列’％s’具有生成的列依赖关系。

如果另一列引用，则不能删除或重命名生成的列。您也必须删除这些列，或者重新定义它们不引用生成的列。

ER_DEPENDENT_BY_GENERATED_COLUMN 在5.7.6中加了。

错误：3109SQLSTATE： （） HY000 ER_GENERATED_COLUMN_REF_AUTO_INC

消息：生成的列’％s’不能引用自动增量列。

ER_GENERATED_COLUMN_REF_AUTO_INC 在5.7.6中加了。

错误：3110SQLSTATE： （） HY000 ER_FEATURE_NOT_AVAILABLE

消息：’％s’功能不可用; 你需要删除’％s’或使用””s’构建的MySQL

ER_FEATURE_NOT_AVAILABLE 在5.7.6中加了。

错误：3111SQLSTATE： （） HY000 ER_CANT_SET_GTID_MODE

消息：SET @@ GLOBAL.GTID_MODE =％s不允许，因为％s。

ER_CANT_SET_GTID_MODE 在5.7.6中加了。

错误：3112SQLSTATE： （） HY000 ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF

消息：复制接收器线程％s无法以AUTO_POSITION模式启动：此服务器使用@@ GLOBAL.GTID_MODE = OFF。

ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF 在5.7.6中加了。

错误：3113SQLSTATE： （） HY000 ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION

消息：当AUTO_POSITION = 1时，在文件％s，位置％lld时，无法复制匿名事务。

ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION 在5.7.6中加了。

错误：3114SQLSTATE： （） HY000 ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON

消息：当@@ GLOBAL.GTID_MODE = ON时，在文件％s，位置％lld时，不能复制匿名事务。

ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON 在5.7.6中加了。

错误：3115SQLSTATE： （） HY000 ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF

消息：当@@ GLOBAL.GTID_MODE = OFF时，在文件％s，位置％lld处，无法复制GTID事务。

ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF 在5.7.6中加了。

错误：3116SQLSTATE： （） HY000 ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS

消息：无法设置ENFORCE_GTID_CONSISTENCY = ON，因为正在进行的事务违反GTID一致性。

ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONSER_CANT_ENFORCE_GTID_CONSISTENCY_WITH_ONGOING_GTID_VIOLATING_TX 在MySQL 8.0中 重命名 。

ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS 在5.7.6中加了。

错误：3117SQLSTATE： （） HY000 ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS

消息：正在进行的交易违反GTID一致性。

ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONSER_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TX 在MySQL 8.0中 重命名 。

ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS 在5.7.6中加了。

错误：3118SQLSTATE： （） HY000 ER_ACCOUNT_HAS_BEEN_LOCKED

消息：拒绝用户’％s’@’％s’的访问。帐户被锁定

该帐户被锁定 CREATE USER … ACCOUNT LOCK或 ALTER USER … ACCOUNT LOCK。管理员可以用它解锁 ALTER USER … ACCOUNT UNLOCK。

ER_ACCOUNT_HAS_BEEN_LOCKED 在5.7.6中加了。

错误：3119SQLSTATE： （） 42000 ER_WRONG_TABLESPACE_NAME

消息：不正确的表空间名称％s

ER_WRONG_TABLESPACE_NAME 在5.7.6中加了。

错误：3120SQLSTATE： （） HY000 ER_TABLESPACE_IS_NOT_EMPTY

消息：表空间`％s’不为空。

ER_TABLESPACE_IS_NOT_EMPTY 在5.7.6中加了。

错误：3121SQLSTATE： （） HY000 ER_WRONG_FILE_NAME

消息：不正确的文件名’％s’。

ER_WRONG_FILE_NAME 在5.7.6中加了。

错误：3122SQLSTATE： （） HY000 ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION

消息：不一致的交点。

ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION 在5.7.7中加了。

错误：3123SQLSTATE： （） HY000 ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR

消息：Optimizer提示语法错误

ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR 在5.7.7中加了。

错误：3124SQLSTATE： （） HY000 ER_WARN_BAD_MAX_EXECUTION_TIME

讯息：不支援MAX_EXECUTION_TIME

ER_WARN_BAD_MAX_EXECUTION_TIME 在5.7.7中加了。

错误：3125SQLSTATE： （） HY000 ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME

消息：MAX_EXECUTION_TIME提示仅由顶级独立的SELECT语句支持

该MAX_EXECUTION_TIME优化提示只为支持SELECT 声明。

ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME 在5.7.7中加了。

错误：3126SQLSTATE： （） HY000 ER_WARN_CONFLICTING_HINT

消息：提示％s被忽略为冲突/复制

ER_WARN_CONFLICTING_HINT 在5.7.7中加了。

错误：3127SQLSTATE： （） HY000 ER_WARN_UNKNOWN_QB_NAME

消息：％s提示找不到查询块名称％s

ER_WARN_UNKNOWN_QB_NAME 在5.7.7中加了。

错误：3128SQLSTATE： （） HY000 ER_UNRESOLVED_HINT_NAME

消息：％s提示的未解决名称％s

ER_UNRESOLVED_HINT_NAME 在5.7.7中加了。

错误：3129SQLSTATE： （） HY000 ER_WARN_DEPRECATED_SQLMODE_UNSET

消息：取消设置sql模式’％s’已被弃用。它将在未来的版本中成为只读。

ER_WARN_DEPRECATED_SQLMODE_UNSET 5.7.7加入，5.7.7后移除。

错误：3129SQLSTATE： （） HY000 ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE

消息：请不要修改％s表。这是一个用于存储已提交事务的GTID的mysql内部系统表。修改它可能导致GTID状态不一致。

ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE 在5.7.8中加了。

错误：3130SQLSTATE： （） HY000 ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED

消息：可插拔协议不支持命令

ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED 在5.7.8中加了。

错误：3131SQLSTATE： （） 42000 ER_LOCKING_SERVICE_WRONG_NAME

消息：锁定服务锁名称’％s’不正确。

锁定服务名称被指定为NULL空字符串或长度超过64个字符的字符串。命名空间和锁名必须是非NULL空，不能超过64个字符。

ER_LOCKING_SERVICE_WRONG_NAME 在5.7.8中加了。

错误：3132SQLSTATE： （） HY000 ER_LOCKING_SERVICE_DEADLOCK

消息：尝试锁定服务锁时发现死锁; 尝试释放锁并重新启动锁获取。

ER_LOCKING_SERVICE_DEADLOCK 在5.7.8中加了。

错误：3133SQLSTATE： （） HY000 ER_LOCKING_SERVICE_TIMEOUT

消息：服务锁等待超时超时。

ER_LOCKING_SERVICE_TIMEOUT 在5.7.8中加了。

错误：3134SQLSTATE： （） HY000 ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED

消息：参数％s超过函数％s中几何的最大点数（％lu）。

ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED 在5.7.8中加了。

错误：3135SQLSTATE： （） HY000 ER_SQL_MODE_MERGED

消息：’NO_ZERO_DATE’，’NO_ZERO_IN_DATE’和’ERROR_FOR_DIVISION_BY_ZERO’sql模式应与严格模式一起使用。他们将在未来的版本中与严格模式合并。

ER_SQL_MODE_MERGED 在5.7.8中加了。

错误：3136SQLSTATE： （） HY000 ER_VTOKEN_PLUGIN_TOKEN_MISMATCH

消息：％。* s的版本令牌不匹配。正确值％。* s

客户端将其version_tokens_session系统变量设置 为要求服务器匹配的令牌列表，但服务器令牌列表至少具有一个与客户端所需的值不同的匹配令牌名称。请参见 第5.5.5节“版本令牌”。

ER_VTOKEN_PLUGIN_TOKEN_MISMATCH 在5.7.8中加了。

错误：3137SQLSTATE： （） HY000 ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND

消息：未找到版本令牌％。*。

客户端将其version_tokens_session系统变量设置 为要求服务器匹配的令牌列表，但是服务器令牌列表中至少缺少一个令牌。请参见第5.5.5节“版本令牌”。

ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND 在5.7.8中加了。

错误：3138SQLSTATE： （） HY000 ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID

消息：拥有GTID的客户端无法更改变量％s。客户拥有％s。所有权在COMMIT或ROLLBACK上发布。

ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID 在5.7.8中加了。

错误：3139SQLSTATE： （） HY000 ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED

消息：％s无法在通道’％s’上执行。

ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED 在5.7.8中加了。

错误：3140SQLSTATE： （） 22032 ER_INVALID_JSON_TEXT

消息：无效的JSON文本：“％s”位于位置％u的列’％s’的值。

ER_INVALID_JSON_TEXT 在5.7.8中加了。

错误：3141SQLSTATE： （） 22032 ER_INVALID_JSON_TEXT_IN_PARAM

消息：参数％u中的无效JSON文本功能％s：位置％u。％s处的“％s”

ER_INVALID_JSON_TEXT_IN_PARAM 在5.7.8中加了。

错误：3142SQLSTATE： （） HY000 ER_INVALID_JSON_BINARY_DATA

消息：JSON二进制值包含无效数据。

ER_INVALID_JSON_BINARY_DATA 在5.7.8中加了。

错误：3143SQLSTATE： （） 42000 ER_INVALID_JSON_PATH

消息：JSON路径表达式无效。错误是围绕字符位置％u。％s

ER_INVALID_JSON_PATH 在5.7.8中加了。

错误：3144SQLSTATE： （） 22032 ER_INVALID_JSON_CHARSET

消息：无法使用CHARACTER SET’％s’从字符串中创建JSON值。

ER_INVALID_JSON_CHARSET 在5.7.8中加了。

错误：3145SQLSTATE： （） 22032 ER_INVALID_JSON_CHARSET_IN_FUNCTION

消息：提供给功能％s的JSON字符数据无效：’％s’; 需要utf8。

ER_INVALID_JSON_CHARSET_IN_FUNCTION 在5.7.8中加了。

错误：3146SQLSTATE： （） 22032 ER_INVALID_TYPE_FOR_JSON

消息：参数％u中的JSON数据的无效数据类型为函数％s; 需要JSON字符串或JSON类型。

ER_INVALID_TYPE_FOR_JSON 在5.7.8中加了。

错误：3147SQLSTATE： （） 22032 ER_INVALID_CAST_TO_JSON

消息：无法将CAST值转换为JSON。

ER_INVALID_CAST_TO_JSON 在5.7.8中加了。

错误：3148SQLSTATE： （） 42000 ER_INVALID_JSON_PATH_CHARSET

消息：路径表达式必须在utf8字符集中进行编码。路径表达式’％s’以字符集’％s’编码。

ER_INVALID_JSON_PATH_CHARSET 在5.7.8中加了。

错误：3149SQLSTATE： （） 42000 ER_INVALID_JSON_PATH_WILDCARD

消息：在这种情况下，路径表达式可能不包含和*标记。

ER_INVALID_JSON_PATH_WILDCARD 在5.7.8中加了。

错误：3150SQLSTATE： （） 22032 ER_JSON_VALUE_TOO_BIG

消息：JSON值太大，无法存储在JSON列中。

ER_JSON_VALUE_TOO_BIG 在5.7.8中加了。

错误：3151SQLSTATE： （） 22032 ER_JSON_KEY_TOO_BIG

消息：JSON对象包含的密钥名称太长。

ER_JSON_KEY_TOO_BIG 在5.7.8中加了。

错误：3152SQLSTATE： （） 42000 ER_JSON_USED_AS_KEY

消息：JSON列’％s’不能在密钥规范中使用。

ER_JSON_USED_AS_KEY 在5.7.8中加了。

错误：3153SQLSTATE： （） 42000 ER_JSON_VACUOUS_PATH

消息：在此上下文中不允许使用路径表达式“$”。

ER_JSON_VACUOUS_PATH 在5.7.8中加了。

错误：3154SQLSTATE： （） 42000 ER_JSON_BAD_ONE_OR_ALL_ARG

消息：％s的oneOrAll参数可以使用以下值：’one’或’all’。

ER_JSON_BAD_ONE_OR_ALL_ARG 在5.7.8中加了。

错误：3155SQLSTATE： （） 22003 ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE

消息：超出范围从％1列的％s的CAST到％s％s的JSON值

ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE 在5.7.8中加了。

错误：3156SQLSTATE： （） 22018 ER_INVALID_JSON_VALUE_FOR_CAST

消息：CAST到％s％s的列％n的列％n无效的JSON值

ER_INVALID_JSON_VALUE_FOR_CAST 在5.7.8中加了。

错误：3157SQLSTATE： （） 22032 ER_JSON_DOCUMENT_TOO_DEEP

消息：JSON文档超过最大深度。

ER_JSON_DOCUMENT_TOO_DEEP 在5.7.8中加了。

错误：3158SQLSTATE： （） 22032 ER_JSON_DOCUMENT_NULL_KEY

消息：JSON文档可能不包含NULL成员名称。

ER_JSON_DOCUMENT_NULL_KEY 在5.7.8中加了。

错误：3159SQLSTATE： （） HY000 ER_SECURE_TRANSPORT_REQUIRED

消息：–require_secure_transport = ON时禁止使用不安全传输的连接。

使用require_secure_transport 系统变量，客户端只能使用安全传输进行连接。 合格连接是使用SSL，Unix套接字文件或共享内存的连接。

ER_SECURE_TRANSPORT_REQUIRED 在5.7.8中加了。

错误：3160SQLSTATE： （） HY000 ER_NO_SECURE_TRANSPORTS_CONFIGURED

消息：没有配置安全传输（SSL或共享内存），无法设置–require_secure_transport = ON。

该require_secure_transport 如果服务器不支持至少一个安全可靠的运输系统变量无法启用。使用所需的SSL密钥/证书配置服务器以启用SSL连接，或启用shared_memory系统变量以启用共享内存连接。

ER_NO_SECURE_TRANSPORTS_CONFIGURED 在5.7.8中加了。

错误：3161SQLSTATE： （） HY000 ER_DISABLED_STORAGE_ENGINE

消息：存储引擎％s被禁用（表创建不被允许）。

尝试使用disabled_storage_engines系统变量的值中列出的存储引擎创建表或表空间 ，或将现有表或表空间更改为此类引擎。 选择不同的存储引擎。

ER_DISABLED_STORAGE_ENGINE 在5.7.8中加了。

错误：3162SQLSTATE： （） HY000 ER_USER_DOES_NOT_EXIST

消息：用户％s不存在。

ER_USER_DOES_NOT_EXIST 在5.7.8中加了。

错误：3163SQLSTATE： （） HY000 ER_USER_ALREADY_EXISTS

消息：用户％s已存在。

ER_USER_ALREADY_EXISTS 在5.7.8中加了。

错误：3164SQLSTATE： （） HY000 ER_AUDIT_API_ABORT

消息：由审计API（’％s’;％d）中止。

此错误表示审核插件终止事件的执行。消息通常表示事件子类名称和数字状态值。

ER_AUDIT_API_ABORT 在5.7.8中加了。

错误：3165SQLSTATE： （） 42000 ER_INVALID_JSON_PATH_ARRAY_CELL

消息：路径表达式不是数组中单元格的路径。

ER_INVALID_JSON_PATH_ARRAY_CELL 在5.7.8中加了。

错误：3166SQLSTATE： （） HY000 ER_BUFPOOL_RESIZE_INPROGRESS

消息：另一个缓冲池调整大小已经在进行中。

ER_BUFPOOL_RESIZE_INPROGRESS 在5.7.9中被添加。

错误：3167SQLSTATE： （） HY000 ER_FEATURE_DISABLED_SEE_DOC

消息：’％s’功能被禁用; 请参阅’％s’的文档

ER_FEATURE_DISABLED_SEE_DOC 在5.7.9中被添加。

错误：3168SQLSTATE： （） HY000 ER_SERVER_ISNT_AVAILABLE

消息：服务器不可用

ER_SERVER_ISNT_AVAILABLE 在5.7.9中被添加。

错误：3169SQLSTATE： （） HY000 ER_SESSION_WAS_KILLED

消息：会话被杀

ER_SESSION_WAS_KILLED 在5.7.9中被添加。

错误：3170SQLSTATE： （） HY000 ER_CAPACITY_EXCEEDED

消息：超出’％s’的％llu字节的内存容量。％S

ER_CAPACITY_EXCEEDED 在5.7.9中被添加。

错误：3171SQLSTATE： （） HY000 ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER

消息：此查询未完成范围优化。

ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER 在5.7.9中被添加。

错误：3172SQLSTATE： （） HY000 ER_TABLE_NEEDS_UPG_PART

消息：需要分区升级。请转储/重新加载修复或执行：ALTER TABLE％s.％s升级分区

ER_TABLE_NEEDS_UPG_PART 在5.7.9中被添加。

错误：3173SQLSTATE： （） HY000 ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID

消息：客户持有GTID％的所有权。因此，WAIT_FOR_EXECUTED_GTID_SET无法等待此GTID。

ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID 在5.7.9中被添加。

错误：3174SQLSTATE： （） HY000 ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL

消息：无法在索引虚拟列的基列上添加外键。

ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL 加入5.7.10。

错误：3175SQLSTATE： （） HY000 ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT

消息：无法在其列具有外部约束的虚拟列上创建索引。

ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT 加入5.7.10。

错误：3176SQLSTATE： （） HY000 ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE

消息：请不要使用XA事务修改％s表。这是用于存储已提交事务的GTID的内部系统表。虽然修改它可能导致GTID状态不一致，但如果需要，可以使用非XA事务进行修改。

ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE 在5.7.11中增加。

错误：3177SQLSTATE： （） HY000 ER_LOCK_REFUSED_BY_ENGINE

消息：存储引擎拒绝锁定采集。

ER_LOCK_REFUSED_BY_ENGINE 在5.7.11中增加。

错误：3178SQLSTATE： （） HY000 ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN

消息：ADD COLUMN col … VIRTUAL，ADD INDEX（col）

ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN 在5.7.11中增加。

错误：3179SQLSTATE： （） HY000 ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE

消息：存储引擎不支持主密钥轮换。

ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE 在5.7.11中增加。

错误：3180SQLSTATE： （） HY000 ER_MASTER_KEY_ROTATION_ERROR_BY_SE

消息：SE报告的加密密钥旋转错误：％s

ER_MASTER_KEY_ROTATION_ERROR_BY_SE 在5.7.11中增加。

错误：3181SQLSTATE： （） HY000 ER_MASTER_KEY_ROTATION_BINLOG_FAILED

消息：写入binlog失败。但是，主键旋转已经成功完成。

ER_MASTER_KEY_ROTATION_BINLOG_FAILED 在5.7.11中增加。

错误：3182SQLSTATE： （） HY000 ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE

消息：存储引擎不可用。

ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE 在5.7.11中增加。

错误：3183SQLSTATE： （） HY000 ER_TABLESPACE_CANNOT_ENCRYPT

消息：此表空间无法加密。

ER_TABLESPACE_CANNOT_ENCRYPT 在5.7.11中增加。

错误：3184SQLSTATE： （） HY000 ER_INVALID_ENCRYPTION_OPTION

消息：加密选项无效。

ER_INVALID_ENCRYPTION_OPTION 在5.7.11中增加。

错误：3185SQLSTATE： （） HY000 ER_CANNOT_FIND_KEY_IN_KEYRING

消息：从钥匙圈找不到主密钥，请检查keyring插件是否加载。

ER_CANNOT_FIND_KEY_IN_KEYRING 在5.7.11中增加。

错误：3186SQLSTATE： （） HY000 ER_CAPACITY_EXCEEDED_IN_PARSER

消息：解析器为此查询保释。

ER_CAPACITY_EXCEEDED_IN_PARSER 在5.7.12中加了。

错误：3187SQLSTATE： （） HY000 ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE

消息：无法通过inplace算法更改加密属性。

ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE 在5.7.13中加了。

错误：3188SQLSTATE： （） HY000 ER_KEYRING_UDF_KEYRING_SERVICE_ERROR

消息：函数’％s’失败，因为基础密钥环服务返回错误。请检查是否安装了一个密钥环插件，并且提供的参数对于您正在使用的密钥环是有效的。

ER_KEYRING_UDF_KEYRING_SERVICE_ERROR 在5.7.13中加了。

错误：3189SQLSTATE： （） HY000 ER_USER_COLUMN_OLD_LENGTH

消息：您的数据库架构似乎是旧的。％s列的长度为77个字符，长度应为93个字符。请运行mysql_upgrade。

ER_USER_COLUMN_OLD_LENGTH 在5.7.13中加了。

错误：3190SQLSTATE： （） HY000 ER_CANT_RESET_MASTER

消息：由于％s不允许RESET MASTER。

ER_CANT_RESET_MASTER 在5.7.14中加了。

错误：3191SQLSTATE： （） HY000 ER_GROUP_REPLICATION_MAX_GROUP_SIZE

消息：START GROUP_REPLICATION命令失败，因为该组已经有9个成员。

ER_GROUP_REPLICATION_MAX_GROUP_SIZE 在5.7.14中加了。

错误：3192SQLSTATE： （） HY000 ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED

消息：无法在存储列的基列上添加外键。

ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED 在5.7.14中加了。

错误：3193SQLSTATE： （） HY000 ER_TABLE_REFERENCED

消息：无法完成操作，因为表被其他连接引用。

ER_TABLE_REFERENCED 在5.7.14中加了。

错误：3194SQLSTATE： （） HY000 ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE

消息：表’％s。％s’使用的分区引擎已被弃用，将在以后的版本中被删除。请改用本机分区。

ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE 在5.7.17中加了。

错误：3195SQLSTATE： （） 01000 ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO

消息：％s（几何）已被弃用，将在未来的版本中替换为st_srid（几何，0）。使用％s（st_aswkb（几何），0）代替。

ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO 在5.7.19加入。

错误：3196SQLSTATE： （） 01000 ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID

消息：％s（几何，srid）已被弃用，将在未来的版本中替换为st_srid（geometry，srid）。改为使用％s（st_aswkb（几何），srid）。

ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID 在5.7.19加入。

错误：3197SQLSTATE： （） HY000 ER_XA_RETRY

消息：资源管理器此时无法提交事务分支。请稍后再试。

ER_XA_RETRY 在5.7.19加入。

错误：3198SQLSTATE： （） HY000 ER_KEYRING_AWS_UDF_AWS_KMS_ERROR

消息：功能％s由于：％s失败。

ER_KEYRING_AWS_UDF_AWS_KMS_ERROR 在5.7.19加入。

错误：3199SQLSTATE： （） HY000 ER_BINLOG_UNSAFE_XA

消息：语句不安全，因为它在XA事务中被使用。并发XA事务可能会在使用语句复制时在从站上死机。

ER_BINLOG_UNSAFE_XA 加入5.7.20。
  