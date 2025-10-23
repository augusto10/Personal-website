# 📊 Configuração do Sistema de Analytics

## Como funciona o contador de visitas

### 🔒 **Sistema Privado (Apenas para você)**

1. **Acesso Admin**: 
   - Clique no pequeno ponto no canto inferior direito
   - Digite a senha: `augusto123`
   - Aparecerá um botão de analytics

2. **Visualizar Estatísticas**:
   - Clique no ícone de gráfico (📊)
   - Veja: Total de visitas, última visita, sessão atual
   - Apenas você pode ver essas informações

### 📈 **Google Analytics (Opcional - Mais Completo)**

Para estatísticas mais detalhadas:

1. **Criar conta Google Analytics**:
   - Acesse: https://analytics.google.com
   - Crie uma propriedade GA4
   - Copie o ID (formato: G-XXXXXXXXXX)

2. **Configurar no site**:
   - Edite `src/components/Analytics.tsx`
   - Substitua `G-XXXXXXXXXX` pelo seu ID real (2 lugares)
   - Faça commit e deploy

## 🛡️ **Segurança**

- **Contador local**: Armazenado no navegador, invisível para visitantes
- **Acesso admin**: Protegido por senha secreta
- **Google Analytics**: Dados privados na sua conta Google

## 🎯 **Funcionalidades**

### **Contador Simples**
- ✅ Conta cada visita única
- ✅ Registra data/hora da última visita
- ✅ Interface privada para visualização
- ✅ Botão de reset das estatísticas

### **Google Analytics (se configurado)**
- ✅ Visitantes únicos vs recorrentes
- ✅ Páginas mais visitadas
- ✅ Tempo de permanência
- ✅ Localização geográfica
- ✅ Dispositivos utilizados
- ✅ Relatórios detalhados

## 🔧 **Como usar**

1. **Ativar modo admin**: Clique no ponto → digite `augusto123`
2. **Ver stats**: Clique no ícone 📊
3. **Resetar**: Botão "Resetar Stats" no painel
4. **Sair**: Botão "Sair Admin"

## 📱 **Responsivo**

O painel funciona em desktop e mobile, sempre acessível apenas para você.

---

**Nota**: As senhas estão no código. Para maior segurança em produção, considere usar variáveis de ambiente.
