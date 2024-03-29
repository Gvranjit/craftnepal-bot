import { expressApp } from './app';
import { env } from './dotenv';
expressApp.listen(env.PORT, () => {
  console.info(`The server is now running at port ${env.PORT}`);
  console.info(`


 _______  _______  _______  _______ _________ _        _______  _______  _______  _         
(  ____ \\(  ____ )(  ___  )(  ____ \\\\__   __/( (    /|(  ____ \\(  ____ )(  ___  )( \\        
| (    \\/| (    )|| (   ) || (    \\/   ) (   |  \\  ( || (    \\/| (    )|| (   ) || (        
| |      | (____)|| (___) || (__       | |   |   \\ | || (__    | (____)|| (___) || |        
| |      |     __)|  ___  ||  __)      | |   | (\\ \\) ||  __)   |  _____)|  ___  || |        
| |      | (\\ (   | (   ) || (         | |   | | \\   || (      | (      | (   ) || |        
| (____/\\| ) \\ \\__| )   ( || )         | |   | )  \\  || (____/\\| )      | )   ( || (____/\\  
(_______/|/   \\__/|/     \\||/          )_(   |/    )_)(_______/|/       |/     \\|(_______/  
                                                                                            
                               ______   _______ _________                                   
                              (  ___ \\ (  ___  )\\__   __/                                   
                              | (   ) )| (   ) |   ) (                                      
                              | (__/ / | |   | |   | |                                      
                              |  __ (  | |   | |   | |                                      
                              | (  \\ \\ | |   | |   | |                                      
                              | )___) )| (___) |   | |                                      
                              |/ \\___/ (_______)   )_(                                      
                                                                                            
                                                                                                                           
                                                                                                                                   
`);
});
