<!DOCTYPE html>
<html>
    <head>
        <title>Ćwiczenia 6 PHP</title>
        <meta charset="utf-8">
    </head>
    <style type="text/css">
        div {
            margin: 20px;
        }
    </style>
    <body>
        <?php
            //1
            $file = fopen("imiona.txt", "r");
            $i = 0;
            
            while(!feof($file)) {
              $data[$i] = fgets($file);
              $i++;
            }
            
            fclose($file);
            
            for($j = 0; $j < count($data); $j++) {
                $data[$j] = preg_replace("/\s+/", "", $data[$j]);
            }
            
            $newData = join($data, "\n");
            
            $nwsFile = fopen("imiona_czyste.txt", "w");
            fwrite($nwsFile, $newData);
            
            //2, 3
            $nwsFile = fopen("imiona_czyste.txt", "r");
            $i = 0;
            while(!feof($nwsFile)) {
                $letters[substr(fgets($nwsFile), 0, 1)]++;
            }
            var_dump($letters);
            fclose($nwsFile);
            
            //4
            $charNum = 0;
            $charNumCzys = 0;
            $imionaArr = file("imiona.txt");
            $imionaCzysteArr = file("imiona_czyste.txt");
            for($x = 0; $x < count($imionaArr); $x++) {
                $charNumCzys += strlen($imionaCzysteArr[$x]);
                $charNum += strlen($imionaArr[$x]);
            }
            $counters = array(  'imiona' => count($imionaArr), 'linie' => count($imionaArr), 'znaki' => $charNum,
                                'imionaCzyste' => count($imionaCzysteArr), 'linieCzyste' => count($imionaCzysteArr), 
                                'znakiCzyste' => $charNumCzys);
            
            var_dump($counters);
        ?>
    </body>
</html>