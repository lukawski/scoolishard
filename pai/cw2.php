<!DOCTYPE html>
<html>
    <head>
        <title>Ćwiczenia 2 PHP</title>
        <meta charset="utf-8">
    </head>
    <body>
        <form action="" method="post">
            <input type="text" name="number1"/>
            <input type="text" name="number2"/>
            <input type="submit" value="Zapisz"/>
        </form>
        
        <?php 
            //1
            $firstNum = $_POST['number1'];
            $secondNum = $_POST['number2'];
            $sum = $firstNum + $secondNum;
            $mult = $firstNum * $secondNum;
            
            $file = fopen("dane1.txt", "w");
            $numData = $firstNum."\n".$secondNum."\n".$firstNum." ".$secondNum."\nSuma = ".$sum."\nIloczyn = ".$mult;
            fwrite($file, $numData);
            fclose($file);
            
            //2
            for($i = 0; $i < 10; $i++){
                $arr[$i] = rand(0, 10000);
            }
            
            $file = fopen("dane2.txt", "w");
            $data = implode(" ", $arr);
            fwrite($file, $data);
            fclose($file);
            
            //3
            $file = fopen("dane2.txt", "r");
            $randNums = fread($file, filesize("dane2.txt"));
            fclose($file);
            $arrRand = explode(" ", $randNums);
            $max = $arrRand[0];
            for($j = 1; $j < sizeof($arrRand); $j++){
                if($max < $arrRand[$j]){
                    $max = $arrRand[$j];
                }
            }
            $sum = 0;
            for($k = 0; $k < sizeof($arrRand); $k++){
                $sum += $arrRand[$k]; 
            }
            $avg = $sum / 2;
            
            $file = fopen("dane3.txt", "w");
            $dataTh = "max = ".$max."; srednia = ".$avg.";";
            fwrite($file, $dataTh);
            fclose($file);
            
            //4
            $file = fopen("dane4.txt", "w");
            $dataCap = "Londyn, Warszawa, Paryz, Madryt, Lizbona\nLondyn\nWarszawa\nParyz\nMadryt\nLizbona";
            fwrite($file, $dataCap);
            fclose($file);
            
            //5
            $file = fopen("dane4.txt", "r");
            $data5 = fread($file, filesize("dane4.txt"));
            fclose($file);
            $arr5 = explode("\n", $data5);
            for($h = 0; $h < sizeof($arr5); $h++){
                $arrL[$h] = $h.". wiersz: ".strlen($arr5[$h])." znaków";
            }
            echo var_dump($arrL);
        ?>
    </body>
</html>