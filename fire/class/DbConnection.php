<?php

class DbConnection
{
  protected static $connection;

  // function __create() {
  //
  // }

    static function getConnection() {
      if (self::$connection) {
        return self::$connection;
      }

      try {
          $dsn = 'mysql:host='.$_ENV['team-22.cg3s3y5635gv.us-east-1.rds.amazonaws.com'].';dbname='.$_ENV['team-22'].';charset=utf8';
          error_log($dsn);
          self::$connection = new PDO(
             $dsn,
             $_ENV['nullproblem'],
             $_ENV['nullproblem'],
             [
                 PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                 PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                 PDO::ATTR_EMULATE_PREPARES   => false
             ]
           );
      } catch (\PDOException $e) {
          throw new \PDOException($e->getMessage(), (int)$e->getCode());
      }
      return self::$connection;
    }
}
