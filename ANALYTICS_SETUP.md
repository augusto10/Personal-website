# Painel de visitas

O painel fica em `/admin` e mostra total de acessos, IPs únicos, acessos do dia e os últimos 250 registros com IP, horário, página, origem e navegador.

## Configuração

1. Crie um banco PostgreSQL (Neon funciona bem com a hospedagem na Vercel).
2. Copie `.env.example` para `.env.local` durante o desenvolvimento e substitua `DATABASE_URL` pela URL completa de conexão PostgreSQL copiada dos detalhes do seu banco Neon (não use o texto de exemplo).
3. Configure `DATABASE_URL`, `ADMIN_PASSWORD` e `ADMIN_SESSION_SECRET` também nas variáveis de ambiente da hospedagem.
4. Gere `ADMIN_SESSION_SECRET` como uma sequência aleatória longa, diferente da senha.
5. Reinicie o servidor. A tabela e o índice são criados automaticamente no primeiro acesso.

Não coloque senhas reais no Git. O cookie administrativo é `HttpOnly`, assinado e expira após 12 horas. Visitas repetidas do mesmo IP e página em menos de 30 minutos não são duplicadas. Registros com mais de 90 dias são apagados automaticamente quando uma nova visita é gravada.

O site respeita o sinal “Não rastrear” do navegador e explica a coleta em `/privacidade`.

## Projetos e imagens

O painel `/admin` também permite criar, editar, destacar e excluir projetos. As alterações são salvas no mesmo banco Neon. Cada imagem pode ter até 2 MB; JPEG, PNG e WebP são aceitos. O link público do projeto aparece no destaque quando a opção de projeto privado está desmarcada.

Os projetos que já existiam no portfólio são adicionados ao banco automaticamente na primeira leitura após a atualização, sem substituir projetos já salvos com os mesmos identificadores.

## Redefinir a senha administrativa

Não existe recuperação por e-mail. Para trocar uma senha esquecida, defina um novo valor para `ADMIN_PASSWORD` nas variáveis de ambiente da hospedagem (por exemplo, em **Vercel → Project Settings → Environment Variables**) e faça um novo deploy. Para desenvolvimento local, altere `ADMIN_PASSWORD` em `.env.local` e reinicie o servidor. Mantenha `ADMIN_SESSION_SECRET` configurado e não compartilhe nem envie os valores das variáveis.
