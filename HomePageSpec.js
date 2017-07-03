describe('MarketPlace homepage', function() {
  it('Acessando o Portal', function() {
    browser.get('http://hml.bonmarketplace.back.b2w/#/login');
    //logando no sistema
    element(by.css('.btn-login')).click();
    element(by.id('loginname')).sendKeys('SUB_TI_HERBERT');
    element(by.id('loginpwd')).sendKeys('dwr9980');
    element(by.css('.btn-primary')).click();
  });

  it('Acessando o menu de Troca e Cancelamento', function() {
    element(by.xpath('/html/body/div[1]/header/div/div/div[2]/select/option[281]')).click();
    element(by.id('menu-sac')).click();
    element(by.xpath('/html/body/div[1]/header/nav/div/div[2]/ul/li[4]/ul/li[2]/a')).click();
    element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[3]/span[1]/button')).click();
  });

  it('Realizando a consulta por filtro', function() {
  	element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[2]/span[1]/span[1]/button')).click();
  	element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[2]/span[1]/span[2]/button')).click();
  	element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[2]/span[1]/span[3]/button')).click();
  	element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[2]/span[1]/span[4]/button')).click();
  });

  it('Pesquisar por intervalo - Data', function(){
  	var copyTest = "01/01/2017"
    element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[1]/div/div/div[1]/span[1]/input')).sendKeys(copyTest);

  	var copyTest = "31/12/2017"
    element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[1]/div/div/div[1]/span[1]/input')).sendKeys(copyTest);

    element(by.xpath('/html/body/div[1]/div/section/form/fieldset[1]/article/div/div[1]/div/div[3]/span[1]/button')).click

	el = element(by.xpath('/html'))
    el.getText().then(function(text){expect(text).toContain("Pedido")});
    el.getText().then(function(text){expect(text).toContain("Entrega")});
    el.getText().then(function(text){expect(text).toContain("Abertura")});
    el.getText().then(function(text){expect(text).toContain("Prazo")});
    el.getText().then(function(text){expect(text).toContain("Tipo")});
    el.getText().then(function(text){expect(text).toContain("Status")});
    el.getText().then(function(text){expect(text).toContain("Devolução")});
    el.getText().then(function(text){expect(text).toContain("Informações")});
    el.getText().then(function(text){expect(text).toContain("Opções")}); 
  });

  it('', function () {
  	element(by.id('btnLinkSaibaMais')).click();
  	element(by.xpath('//*[@id="accordion"]/div[1]/div[1]/h4/a')).click();
  	element(by.xpath('//*[@id="accordion"]/div[2]/div[1]/h4/a')).click();
  	element(by.xpath('//*[@id="accordion"]/div[3]/div[1]/h4/a')).click();  	
  	element(by.xpath('//*[@id="accordion"]/div[4]/div[1]/h4/a')).click();  	
  	element(by.xpath('//*[@id="accordion"]/div[5]/div[1]/h4/a')).click();  	
  	element(by.xpath('//*[@id="accordion"]/div[6]/div[1]/h4/a')).click();  	
  	element(by.xpath('//*[@id="accordion"]/div[7]/div[1]/h4/a')).click();  	
  	element(by.xpath('//*[@id="accordion"]/div[8]/div[1]/h4/a')).click();  	
  })


});