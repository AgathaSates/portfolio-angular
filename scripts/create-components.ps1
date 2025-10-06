try {
  Write-Host "Criando componentes com a Angular CLI..."
  npx ng g c components/as-navbar --skip-tests
  npx ng g c components/as-bottom-navbar --skip-tests
  npx ng g c components/as-image-ring --skip-tests
  npx ng g c components/as-buttons --skip-tests
  npx ng g c components/as-card --skip-tests
}
catch {
    Write-Error "Um dos comandos falhou: $_"
  exit 1;
}

