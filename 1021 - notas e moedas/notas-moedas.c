#include<stdio.h>

int main()
{
    int dinheiro1, cem, cinquenta, cin_di, vinte, vinte_di, dez, dez_di, cinco, cinco_di, dois, dois_di;

    int moedas, um, um1, cinq_cen, vin_cent, dez_cen, cinco_cent, umc;

    double dinheiro;

    scanf("%lf", &dinheiro);
    dinheiro1 = (int)dinheiro;
    dinheiro -= dinheiro1;
    moedas = (dinheiro *100);

    cem = dinheiro1/100;
    cinquenta = dinheiro1 %100;
    cin_di = cinquenta/50;
    vinte = cinquenta%50;
    vinte_di = vinte/20;
    dez = vinte%20;
    dez_di = dez/10;
    cinco = dez%10;
    cinco_di = cinco/5;
    dois = cinco%5;
    dois_di = dois/2;

    um = dois%2;
    um1 = um/1;

    cinq_cen = moedas /50;
    vin_cent = (moedas %50)/25;
    dez_cen = (((moedas %50)%25)/10);
    cinco_cent = ((((moedas %50)%25)%10)/5);
    umc = ((((moedas %50)%25)%10)%5)/1;

    printf("NOTAS:\n");
    printf("%d nota(s) de R$ 100.00\n",cem);
    printf("%d nota(s) de R$ 50.00\n",cin_di);
    printf("%d nota(s) de R$ 20.00\n",vinte_di);
    printf("%d nota(s) de R$ 10.00\n",dez_di);
    printf("%d nota(s) de R$ 5.00\n",cinco_di);
    printf("%d nota(s) de R$ 2.00\n",dois_di);

    printf("MOEDAS:\n");
    printf("%d moeda(s) de R$ 1.00\n", um1);
    printf("%d moeda(s) de R$ 0.50\n", cinq_cen);
    printf("%d moeda(s) de R$ 0.25\n", vin_cent);
    printf("%d moeda(s) de R$ 0.10\n", dez_cen);
    printf("%d moeda(s) de R$ 0.05\n", cinco_cent);
    printf("%d moeda(s) de R$ 0.01\n", umc);

    return 0;
}